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

const addHostIfSymbolicPath = (path: string): string => {
  const host = 'https://strapi.fable-lab.org';
  return /^(http|https)/.test(path) ? path : `${host}${path}`;
};

export default function FrameCard({ title, color, body, image }: FrameCardProps) {
  const borderColors: Record<string, string> = {
    yellow: 'border-bees-400',
    violet: 'border-lavender-200',
    prune: 'border-camelot-800',
    orange: 'border-cinnabar-400',
    blue: 'border-azure-200'
  };

  const hasImage = !!image?.url;

  return (
    <div className={`flex flex-col md:flex-row border-6 p-10 rounded-lg w-full ${borderColors[color]}`} data-testid="frame-card">
      <div className={`w-full ${hasImage ? 'md:w-2/3' : ''} space-y-4`}>
        <h3 className="font-bold text-2xl text-black">{title}</h3>
        <BlocksRenderer content={body} />
      </div>
       {hasImage && (
        <div className="w-full md:w-1/3 flex justify-center items-center mt-6 md:mt-0 pl-6">
          <img src={addHostIfSymbolicPath(image.url!)} alt="Frame Card" />
        </div>
      )}
    </div >
  )
}
