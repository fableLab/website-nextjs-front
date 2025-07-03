import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { Title } from '../../components/Title'

type Props = TextBlockProps

export const LicenseBlock: React.FC<Props> = ({ blocks, description }) => {

  return (
    <section className="space-y-6 text-black">
      <Title name="Licence libre" />
      <p className="text-base">{description}</p>
      <div className='space-y-5'>
        <RenderBlocks blocks={blocks} />
      </div>
      <p className='text-base text-black'>Cette ressource est partagée librement avec la licence CC BY-SA 4.0.</p>
      <div className="space-y-1">
        <p><a href='#' className='underline text-base text-black hover:text-blue-700'>Retrouvez toutes les modalités de partage de la ressource sur notre page dédiée.</a></p>
        <p><a href='#' className='underline text-base text-black hover:text-blue-700'>Écrivez-nous vos questions et retours via notre formulaire de contact.</a></p>
      </div>

    </section>
  )
}
