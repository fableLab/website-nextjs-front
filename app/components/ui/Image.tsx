export type ImageProps = {
  caption: string;
  align: string;
  media: {
    url: string;
  };
};

const addHostIfSymbolicPath = (path: string): string => {
  const host = 'https://strapi.fable-lab.org';
  return /^(http|https)/.test(path) ? path : `${host}${path}`;
};

export default function Title({ caption, align, media }: ImageProps) {
  return (
    <figure className={align == 'expanded' ? 'w-full' : 'w-1/2 mx-auto'}>
      <img src={addHostIfSymbolicPath(media.url)} alt={caption} />
      <figcaption className="text-center">{caption}</figcaption>
    </figure>
  );
}
