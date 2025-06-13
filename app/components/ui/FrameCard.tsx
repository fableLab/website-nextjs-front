import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export type FrameCardProps = {
    title: string;
    colours: string;
    body: BlocksContent;
    image: {
        url?: string;
    } | null;
};

export default function FrameCard({ title, colours, body, image }: FrameCardProps) {
    const imageUrl = image?.url ? `http://localhost:1337${image.url}` : '/partenaires_projet_logo.png';
    const borderColor = `var(--color-${colours ?? 'bees-400'})`;
    return (
        <div className="flex border-[6px] p-10 rounded-lg w-[807px] h-[503px]" style={{ borderColor}}>
            <div className="w-2/3 space-y-4">
                <h3 className="font-bold text-2xl text-black">{title}</h3>
                {/* <div className="text-black text-base space-y-3">{body}</div> */}
                <BlocksRenderer content={body} />
            </div>
            <div className="w-1/3 flex justify-center items-center">
                <Image src={imageUrl} alt="Frame Card" width={201} height={398} />
            </div>
        </div>
    )
}