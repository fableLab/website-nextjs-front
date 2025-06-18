import Link from "next/link";
import Image from "next/image";

export type ButtonDownloadProps = {
  label: string;
  media: {
    url?: string;
  };
};

export default function ButtonDownload({ label, media }: ButtonDownloadProps) {
  const colorAndCursor = media?.url ? "bg-bees-400 hover:bg-bees-200" : "bg-gray-200 cursor-not-allowed pointer-events-none text-red-400"
  return (
    <button>
      <Link
        download
        href={media?.url || "#"}
        target="_blank"
        className={`${colorAndCursor}
        rounded-full transition duration-200 w-64
        grid grid-cols-6 gap-0 items-center place-items-center text-base
        py-4 px-6 group`}
      >
        <div className="col-span-5">
          <p className="text-center font-medium px-2">{!media?.url && "Fichier indisponible:"} {label}</p>
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
