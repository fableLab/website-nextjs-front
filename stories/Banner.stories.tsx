import { expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Banner from '@/app/components/ui/Banner';

const meta = {
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  args: {
    title: 'Home'
  }
};
