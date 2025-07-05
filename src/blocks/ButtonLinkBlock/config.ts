import { Block } from 'payload/types';

const ButtonLinkBlock: Block = {
    slug: 'buttonLink',
    fields: [
        {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    ],
};

export default ButtonLinkBlock;