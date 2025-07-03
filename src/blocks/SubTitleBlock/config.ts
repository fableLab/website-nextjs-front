import type { Block } from 'payload'

export const SubTitleBlock: Block = {
  slug: 'subTitleBlock',
  interfaceName: 'SubTitleBlock',
  imageURL: '/blocks/sub-title.png',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true
    }
  ],
}
