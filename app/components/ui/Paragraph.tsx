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

const getLayoutClasses = (align: ParagraphProps['align']) => {
  const textAlign = `text-${align}`;

  switch (align) {
    case 'center':
      return {
        container: 'md:grid md:grid-cols-4',
        gridItem: 'md:col-span-2 md:col-start-2',
        textAlign,
      };
    case 'right':
      return {
        container: 'md:grid md:grid-cols-2',
        gridItem: 'md:col-start-2',
        textAlign,
      };
    case 'left':
    default:
      return {
        container: 'md:grid md:grid-cols-2',
        gridItem: 'md:col-span-1',
        textAlign,
      };
  }
};

export default function Paragraph ({ title, body, align }: ParagraphProps) {
     const { container, gridItem, textAlign } = getLayoutClasses(align);

    return (
        <div data-testid="paragraph-container" className={`paragraph-block w-full ${container}`}>
          <div className={`${gridItem} ${textAlign}`}>
            {title && (
        <h3 className="text-2xl font-bold mb-4 text-azure-800">
          {title}
        </h3>
      )}              
        <div className={`prose max-w-none ${textAlign}`}>
          <BlocksRenderer 
            content={body}
            blocks={{
              link: ({ children, url }) => (
                <Link href={url}>
                  {children}
                </Link>
              ),
            }}
          />
          </div>
          </div>
      </div>
    );
}