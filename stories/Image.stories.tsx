import { expect, userEvent } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Image from '@/app/components/ui/Image';

const meta = {
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    caption: 'Caches-Caches 2025',
    align: 'center',
    media: {
      url: 'https://www.fable-lab.com/wp-content/uploads/2022/03/Photo_imagiers_senmo4_site_web.png'
    }
  },
  play: async ({ canvas, userEvent }) => {
    const label = await canvas.findByText('Caches-Caches 2025');
    await expect(label).toBeVisible();
  }
}
