import React from 'react'

export const Title: React.FC<Props> = (props) => {
  const {
    id, name
  } = props

  return (
    <h2 className="text-4xl text-azure-800 font-bold font-basis" data-title-id={id}>
      {name}
    </h2>
  )
}
