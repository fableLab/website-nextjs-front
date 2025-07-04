'use client'
import { useEffect } from 'react'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import Title, { TitleProps } from '@/app/components/ui/Title'
import SubTitle, { SubTitleProps } from '@/app/components/ui/SubTitle'
import ButtonLink, { ButtonLinkProps } from '@/app/components/ui/ButtonLink'
import ButtonDownload, { ButtonDownloadProps } from '@/app/components/ui/ButtonDownload'
import License, { LicenseProps } from '@/app/components/ui/License'
import FrameCard, { FrameCardProps } from '@/app/components/ui/FrameCard'
import Image, { ImageProps } from '@/app/components/ui/Image'
import Paragraph, { ParagraphProps } from '@/app/components/ui/Paragraph'
import SummaryPortal from '@/app/components/ui/SummaryPortal'
import { useTitleStore } from '@/app/stores/titleStore'
import { useSummaryStore } from '@/app/stores/SummaryStore'

type ComponentPropsMap = {
  "elements.title": TitleProps;
  "elements.sub-title": SubTitleProps;
  "elements.button-link": ButtonLinkProps;
  "elements.button-download": ButtonDownloadProps;
  "elements.license": LicenseProps;
  "elements.frame-card": FrameCardProps;
  "elements.image": ImageProps;
  "elements.paragraph": ParagraphProps;
};

type ComponentKeys = keyof ComponentPropsMap;

type ComponentData = {
  [K in ComponentKeys]: {
    __component: K;
    id?: number,
    name?: string
  } & ComponentPropsMap[K];
}[ComponentKeys];

type PageResponse = {
  data?: {
    name: string
    contents?: ComponentData[]
  }
}

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('Erreur de chargement')
    return res.json()
  })

export default function Page() {
  const setTitle = useTitleStore(state => state.setTitle);
  const addItem = useSummaryStore((state) => state.addItem)
  const clearSummary = useSummaryStore((state) => state.clear)

  const { documentId } = useParams<{ documentId: string }>();

  const { data, error, isLoading } = useSWR<PageResponse>(
    documentId ? `http://strapi.fable-lab.org/api/pages/${documentId}?populate[contents][populate]=*` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  );

  const components = data?.data?.contents ?? []

  useEffect(() => {
    setTitle(data?.data?.name ?? '');
  }, [data?.data?.name, setTitle]);

  useEffect(() => {
    clearSummary();
    components
      .filter(c => ['elements.title', 'elements.sub-title'].includes(c.__component))
      .forEach(({ id, name, __component }) => {
        addItem(__component, name, id);
      });
  }, [components]);

  if (isLoading) return <p>Chargement…</p>
  if (error) return <p>Erreur lors du chargement de la page.</p>

  return (
    <div className="flex flex-col gap-9">
      <SummaryPortal />
      {components.map((component: ComponentData, index) => {
        switch (component.__component) {
          case 'elements.title':
            return <Title key={index} {...(component as TitleProps)} />
          case 'elements.sub-title':
            return <SubTitle key={index} {...(component as SubTitleProps)} />
          case 'elements.button-link':
            return <ButtonLink key={index} {...(component as ButtonLinkProps)} />
          case 'elements.button-download':
            return <ButtonDownload key={index} {...(component as ButtonDownloadProps)} />
          case 'elements.license':
            return <License key={index} {...(component as LicenseProps)} />
          case 'elements.frame-card':
            return <FrameCard key={index} {...(component as FrameCardProps)} />
          case 'elements.image':
            return <Image key={index} {...(component as ImageProps)} />
          case 'elements.paragraph':
            return <Paragraph key={index} {...(component as ParagraphProps)} />
          default:
            return null
        }
      })}
    </div>
  )
}
