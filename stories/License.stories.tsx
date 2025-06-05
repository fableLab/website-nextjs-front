import { expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import License from '@/app/components/ui/License';

const meta = {
  component: License,
} satisfies Meta<typeof License>;

export default meta;
type Story = StoryObj<typeof License>;

export const Default: Story = {
  args: {
    description: '2020 “Cartes illustrées Assistantes maternelles” par fable-Lab.',
    licenseItems: [
      {
        title: 'Graphisme et édition des cartes.',
        content: 'Léa Oriol',
      },
      {
        title: 'Prototypage du kit.',
        content: 'Yassin Aghani, Yayneabeba Nigatu',
      },
      {
        title: 'Mise en ligne sur Yiotta.',
        content: 'Yayneabeba Nigatu',
      },
    ],
  },
  play: async ({ canvas, userEvent, args }) => {
    const description = canvas.getByText(args.description);
    await expect(description).toBeVisible();

    for (const item of args.licenseItems) {
        const title = canvas.getByRole('heading', { name: item.title });
      await expect(title).toBeVisible();

      const content = canvas.getByText(item.content);
      await expect(content).toBeVisible();
    }
    
  },
};


