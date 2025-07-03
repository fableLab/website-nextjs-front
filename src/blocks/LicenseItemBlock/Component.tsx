import React from 'react'

import type { TextBlock as TextBlockProps } from '@/payload-types'

type Props = TextBlockProps

export const LicenseItemBlock: React.FC<Props> = (props) => {
  const {
    title, description
  } = props

  return (
    <div>
      <h3 className="text-3xl text-azure-800 font-extrabold font basis">{ title }</h3>
      <p>{ description }</p>
    </div>
  )
}
