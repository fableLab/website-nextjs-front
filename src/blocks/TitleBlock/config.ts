import type { Block } from 'payload'

export const TitleBlock: Block = {
  slug: 'titleBlock',
  interfaceName: 'TitleBlock',
  imageURL: '/blocks/title.png',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    }
  ],
}
