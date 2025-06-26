import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from 'next/link';

export type ParagraphProps = {
  title?: string;
  body: BlocksContent,
  align: 'left' | 'center' | 'right';
};

const gridItemChoices: Record<string, string> = {
  "left": "col-span-8",
  "center": "col-span-8 col-start-3",
  "full": "col-span-12",
  "right": "col-start-5 col-span-8"
};

export default function Paragraph({ title, body, align }: ParagraphProps) {
  const gridItem = gridItemChoices[align];

  return (
    <div className="paragraph-block w-full md:grid md:grid-cols-12">
      <div className={gridItem}>
        {title && (
          <h3 className="text-2xl font-bold mb-4 text-azure-800">
            {title}
          </h3>
        )}
        <BlocksRenderer
          content={body}
          blocks={{
            link: ({ children, url }) => (
              <Link href={url} className="italic underline">
                {children}
              </Link>
            ),
          }}
        />
      </div>
    </div>
  );
}
