import type { Block } from 'payload'

export const LicenseItemBlock: Block = {
  slug: 'licenseItemBlock',
  interfaceName: 'LicenseItemBlock',
  imageURL: '/blocks/license-item.png',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'description',
      type: 'text',
      required: true
    }
  ],
}
