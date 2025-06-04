import { expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Title from '@/app/components/ui/Title';

const meta = {
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    name: 'Hello World',
  },
  play: async ({ canvas, userEvent }) => {
    const title = canvas.getByRole('heading', { name: 'Hello World' });
    await expect(title).toHaveTextContent('Hello');
  },
};
