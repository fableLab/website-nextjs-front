import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'
import { Title } from '../../components/Title'

type Props = TextBlockProps

export const TitleBlock: React.FC<Props> = (props) => {
  const {
    id, name
  } = props

  return (
    <Title {...{id, name}} />
  )
}
