import { expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import LicenseItem from '@/app/components/ui/LicenseItem';

const meta = {
  component: LicenseItem,
} satisfies Meta<typeof LicenseItem>;

export default meta;
type Story = StoryObj<typeof LicenseItem>;

export const Default: Story = {
  args: {
    title: 'Licence libre',
    content: 'Cartes illustrées Assistantes maternelles'
  },
  play: async ({ canvas, userEvent, args }) => {
    const title = canvas.getByRole('heading', { name: args.title });
    await expect(title).toBeVisible();
    const content = canvas.getByText(args.content);
    await expect(content).toBeVisible();
  },
};