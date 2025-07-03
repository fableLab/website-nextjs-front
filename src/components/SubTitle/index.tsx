import React from 'react'

export const SubTitle: React.FC<Props> = (props) => {
  const {
    id, name
  } = props

  return (
    <h3 className="text-3xl text-azure-800 font-extrabold font basis" data-sub-title-id={id}>
      {name}
    </h3>
  )
}
