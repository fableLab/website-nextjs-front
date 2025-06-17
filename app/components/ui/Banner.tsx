export type BannerProps = {
  title: string
};

export default function Banner({ title }: BannerProps) {
  return (
    // <>
    //   <div className="h-20 bg-lavender-400">
    //   </div>
    //   <h2 className="text-4xl text-white bg-lavender-400 font-bold py-5 px-6">
    //     {title}
    //   </h2>
    // </>
    //
    <h2 className="text-4xl text-white bg-lavender-400 font-bold pt-18 py-5 px-6">
      {title}
    </h2>
  );
}
