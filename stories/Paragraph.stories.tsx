import { expect } from 'storybook/test';
import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Paragraph from '@/app/components/ui/Paragraph';

const meta = {
    component: Paragraph,
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Default: Story = {
    args: {
        title: 'La recherche-action Langue et Assistantes maternelles',
        body: [
            {
                type: "paragraph",
                children: [
                    {
                        type: 'text',
                        text: 'Ces cartes ont été prototypées dans le cadre de la recherche-action ',
                    },
                    {
                        type: 'link',
                        url: '#', // Placeholder URL, change as needed
                        children: [
                            {
                                type: 'text',
                                text: 'Langues et Assistantes maternelles',
                            },
                        ],
                    },
                    {
                        type: 'text',
                        text: ' qui s’est attachée à comprendre les enjeux liés à la langue française et à l’utilisation des langues pour les assistantes maternelles de Seine-Saint-Denis.',
                    },
                ]
            }
        ],
        align: 'left',
    }
}