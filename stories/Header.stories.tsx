import { expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Header from '@/app/components/layout/Header';
import "@/app/globals.css";

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
};
