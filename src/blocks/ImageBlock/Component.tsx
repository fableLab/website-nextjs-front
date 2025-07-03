import React from 'react'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'
import { Image } from '../../components/Image'

type Props = MediaBlockProps

export const ImageBlock: React.FC<Props> = (props) => {
  const {
    media,
    alt
  } = props

  return (
      media && (
        <Image
          media={media}
        />
      )
  )
}
