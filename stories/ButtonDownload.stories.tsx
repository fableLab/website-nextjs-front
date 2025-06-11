import { expect, userEvent } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ButtonDownload from '@/app/components/ui/ButtonDownload';

const meta = {
  component: ButtonDownload,
} satisfies Meta<typeof ButtonDownload>;

export default meta;
type Story = StoryObj<typeof ButtonDownload>;

export const Default: Story = {
    args: {
        label: 'Télécharger le kit de fabrication artisanale',
        url: 'https://www.fable-lab.com/wp-content/uploads/2024/03/Asistantes_maternelles_affiche_depliant_francais_anglais_langue3.zip',
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

