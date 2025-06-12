'use client'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
// import { createElement } from 'react'
import Title, { TitleProps } from '@/app/components/ui/Title'
import SubTitle, { SubTitleProps } from '@/app/components/ui/SubTitle'
import ButtonLink, { ButtonLinkProps } from '@/app/components/ui/ButtonLink'
import ButtonDownload, { ButtonDownloadProps } from '@/app/components/ui/ButtonDownload'

// const Components = {
//   'global.title': Title,
//   'global.sub-title': SubTitle,
//   'global.button-link': ButtonLink,
//   'global.button-download': ButtonDownload
// } as const

//type ComponentKeys = "global.title" | "global.sub-title" | "global.button" | "global.button-media";

type ComponentPropsMap = {
  "elements.title": TitleProps;
  "elements.sub-title": SubTitleProps;
  "elements.button-link": ButtonLinkProps;
  "elements.button-download": ButtonDownloadProps;
};

type ComponentKeys = keyof ComponentPropsMap;

type ComponentData = {
  [K in ComponentKeys]: {
    __component: K;
  } & ComponentPropsMap[K];
}[ComponentKeys];

type PageResponse = {
  data?: {
    contents?: ComponentData[]
  }
}

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('Erreur de chargement')
    return res.json()
  })

export default function Page() {
  const { documentId } = useParams<{ documentId: string }>()
  const { data, error, isLoading } = useSWR<PageResponse>(
    documentId ? `https://strapi.fable-lab.org/api/pages/${documentId}?populate[contents][populate]=*` : null,
    fetcher
  )

  const components = data?.data?.contents ?? []

  if (isLoading) return <p>Chargement…</p>
  if (error) return <p>Erreur lors du chargement de la page.</p>

  return (
    <>
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
          default:
            return null
        }
      })}
    </>
  )
}
