export type ImageProps = {
  caption: string;
  align: string;
  media: {
    url?: string;
  };
};

export default function Title({ caption, align, media }: ImageProps) {
  return (
    <>
      {
        media?.url ?
          <figure className={align == 'expanded' ? 'w-full' : 'w-1/2 mx-auto'}>
            <img src={media?.url} alt={caption} />
            <figcaption className="text-center">{caption}</figcaption>
          </figure >
          :
          <p className="py-32 bg-camelot-100 text-center items-center text-camelot-800 w-1/2 mx-auto">
            <span className="font-bold text-xl">Oups 😅</span><br />
            L’image n’est pas là, mais les mots tiennent bon.<br />
            On va arranger ça très vite !
          </p >
      }
    </>
  );
}
