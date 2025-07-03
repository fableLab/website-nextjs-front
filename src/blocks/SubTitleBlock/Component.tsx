import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'
import { SubTitle } from '../../components/SubTitle'

type Props = TextBlockProps

export const SubTitleBlock: React.FC<Props> = (props) => {
  const {
    id, name
  } = props

  return (
    <SubTitle {...{id, name}} />
  )
}
