import type { Block } from 'payload'
import { LicenseItemBlock } from '../../blocks/LicenseItemBlock/config'

export const LicenseBlock: Block = {
  slug: 'licenseBlock',
  interfaceName: 'LicenseBlock',
  imageURL: '/blocks/license.png',
  fields: [
    {
      type: 'text',
      name: 'description'
    },
    {
      type: 'blocks',
      blocks: [LicenseItemBlock],
      name: 'blocks'
    }
  ],
}
