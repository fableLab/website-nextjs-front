import Link from "next/link";
import Image from "next/image";

export type ButtonDownloadProps = {
  label: string;
  media: {
    url: string;
  };
};

export default function ButtonDownload({ label, media }: ButtonDownloadProps) {
  return (
    <button>
      <Link
        download
        href={`https://strapi.fable-lab.org${media.url}`}
        className="rounded-full transition duration-200 w-64
        grid grid-cols-6 gap-0 items-center place-items-center text-base
        bg-bees-400 hover:bg-bees-200 py-4 px-6 group"
        target="_blank"
      >
        <div className="col-span-5">
          <p className="text-center font-medium px-2">{label}</p>
        </div>
        <div className="col-span-1 text-center relative w-9 h-9">
          {/* Icône normale */}
          <Image
            src="/arrows/arrow-right-icon.png"
            alt="icon"
            width={36}
            height={36}
            className="rotate-90 absolute inset-0 transition-opacity duration-200 opacity-100 group-hover:opacity-0"
          />
          {/* Icône au survol */}
          <Image
            src="/arrows/arrow-right-zigzag-icon.png"
            alt="icon hover"
            width={36}
            height={36}
            className="rotate-90 absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100"
          />
        </div>
      </Link>
    </button>
  );
}
