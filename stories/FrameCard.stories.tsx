//import { expect } from 'storybook/test';
import FrameCard from "@/app/components/ui/FrameCard";
import { Meta, StoryObj } from "@storybook/nextjs-vite";


const meta = {
  component: FrameCard,
} satisfies Meta<typeof FrameCard>;

export default meta;
type Story = StoryObj<typeof FrameCard>;

export const Default: Story = {
  args: {
    title: 'Les partenaires du projet.',
    color: 'yellow',
    body: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Ce travail a été mené grâce au soutien de la Caisse d’Allocations Familiales de Seine-Saint-Denis ",
          },
          {
            type: "link",
            url: "https://caf.fr/allocataires/caf-de-la-seine-saint-denis",
            children: [
              { type: "text", text: "CAF 93" }
            ]
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Nous avons été accueillis et eu le plaisir de collaborer avec les équipes, les PMI et les RPE (Relai Petite Enfance) de six villes sur le département.",
          },
        ],
      },
    ],
    image: {
      url: 'https://www.fable-lab.com/wp-content/uploads/2022/03/Photo_imagiers_senmo4_site_web.png'
    },
  },

  play: async () => {
  }
};
