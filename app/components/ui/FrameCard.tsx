import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export type FrameCardProps = {
  title: string;
  color: string;
  body: BlocksContent;
  image: {
    url?: string;
  } | null;
};
const borderColors: Record<string, string> = {
  yellow: 'border-bees-400',
  violet: 'border-lavender-200',
  prune: 'border-camelot-800',
  orange: 'border-cinnabar-400',
  blue: 'border-azure-200'
};

export default function FrameCard({ title, color, body, image }: FrameCardProps) {
  const hasImage = !!image?.url;
  const borderColor = borderColors[color];

  return (
    <div className={`flex flex-col md:flex-row border-6 p-10 rounded-lg w-full gap-9 ${borderColor}`}>
      <div className="grow space-y-2">
        <h3 className="font-bold text-2xl text-black">{title}</h3>
        <BlocksRenderer content={body} />
      </div>
      {hasImage && (
        <div className="flex basis-3/4 justify-center items-center">
          <img src={image.url} className="w-full h-auto" />
        </div>
      )}
    </div>
  )
}
