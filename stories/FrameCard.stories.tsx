import { expect } from 'storybook/test';
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

  play: async ({ canvas, args }) => {

    const EXPECTED_BORDER_CLASS = {
    'yellow': 'border-bees-400',
    'violet': 'border-lavender-200',
    'prune': 'border-camelot-800',
    'orange': 'border-cinnabar-400',
    'blue': 'border-azure-200'
    };

    const VALID_COLORS = Object.keys(EXPECTED_BORDER_CLASS);

  if (!VALID_COLORS.includes(args.color)) {
    throw new Error(
      `❌ Invalid color "${args.color}". Must be one of: ${VALID_COLORS.join(', ')}`
    );
  }

  const expectedClass = EXPECTED_BORDER_CLASS[args.color as keyof typeof EXPECTED_BORDER_CLASS];

  // Make sure your FrameCard div has data-testid="frame-card"
  const card = await canvas.getByTestId('frame-card');
  await expect(card.className).toContain(expectedClass);


    // ✅ Title check
    const heading = await canvas.getByRole('heading', { name: 'Les partenaires du projet.' });
    await expect(heading).toBeVisible();

    // ✅ Body content check
    await expect(canvas.getByText(/Ce travail a été mené grâce au soutien/)).toBeVisible();
    await expect(canvas.getByText('CAF 93')).toBeVisible();
    await expect(canvas.getByText(/Nous avons été accueillis/)).toBeVisible();

    // ✅ Optional: image alt text
    const image = canvas.getByRole('img', { name: /Frame Card/i });
    await expect(image).toBeVisible();
  }
};
