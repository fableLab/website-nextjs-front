import { expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Footer from '@/app/components/layout/Footer';

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
};
