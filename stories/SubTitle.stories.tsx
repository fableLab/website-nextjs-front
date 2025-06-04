import { expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SubTitle from '@/app/components/ui/SubTitle';

const meta = {
  component: SubTitle,
} satisfies Meta<typeof SubTitle>;

export default meta;
type Story = StoryObj<typeof SubTitle>;

export const Default: Story = {
  args: {
    name: 'Heading h3',
  },
  play: async ({ canvas, userEvent }) => {
    const subTitle = canvas.getByRole('heading', { name: 'Heading h3' });
    await expect(subTitle).toHaveTextContent('h3');
  },
};
