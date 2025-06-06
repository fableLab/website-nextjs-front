import Image from 'next/image';
import Link from 'next/link';

const headerItems = ["L'association", "Projets", "Ressources", "Contact", "Boutique"];

export default function Header() {
  return (
    <header className="bg-[#753345] grid grid-cols-12 border-3 border-white">
      <div className="col-span-4">
        <Link href="/">
          <Image src="/logo/logo_white.png" alt="Logo white"
            width={1}
            height={1}
            style={{ height: '32px', width: 'auto' }}
            className='my-5 ms-4 p-1' />
        </Link>
      </div>
      <nav className="col-span-8 flex flex-row content-center">
        {
          headerItems.map((item) => (
            <div className="flex-1 border-l-3 border-white" key={item}>
              <Link href="#" className="text-white text-center w-full inline-block my-5 text-2xl">{item}</Link>
            </div>
          ))
        }
      </nav>
    </header>
  );
}
