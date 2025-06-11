import { expect, userEvent } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ButtonLink from '@/app/components/ui/ButtonLink';

const meta = {
  component: ButtonLink,
} satisfies Meta<typeof ButtonLink>;

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Default: Story = {
    args: {
        label: 'Les mots des assistante maternelle',
        url: 'https://www.fable-lab.com/projets/langues-assistantes-maternelles/communication-plurilingue/',
    },
    play: async({ canvas, userEvent }) => {
        // test label
        const label = await canvas.findByText('Les mots des assistante maternelle');
        await expect(label).toBeVisible();

        // Trigger onClick
        const button = canvas.getByTestId('button-container');
        await userEvent.click(button);
    }
} 

