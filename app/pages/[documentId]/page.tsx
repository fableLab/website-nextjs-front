'use client'
import SubTitle from '@/app/components/ui/SubTitle'
import Title from '@/app/components/ui/Title'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { createElement } from 'react'

const Components = {
  'global.title': Title,
  'global.subtile': SubTitle
} as const

type ComponentData = {
  __component: keyof typeof Components
  name?: string
  [key: string]: any
}

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
    documentId ? `https://strapi.fable-lab.org/api/pages/${documentId}?populate=*` : null,
    fetcher
  )

  const components = data?.data?.contents ?? []

  if (isLoading) return <p>Chargement…</p>
  if (error) return <p>Erreur lors du chargement de la page.</p>

  return (
    <>
      {components.map((component, index) => {
        const Component = Components[component.__component]
        if (!Component) return null
        return createElement(Component, { key: index, ...component })
      })}
    </>
  )
}
