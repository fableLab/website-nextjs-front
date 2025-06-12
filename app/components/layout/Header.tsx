import Link from 'next/link';

const headerItems = ["L'association", "Projets", "Ressources", "Contact", "Boutique"];

export default function Header() {
  return (
    <header className="bg-camelot-800 grid grid-cols-12 border-3 border-white">
      <div className="md:col-span-4 col-span-12">
        <Link href="/">
          <img src="/logo/logo_white.png" alt="Logo white" className='h-8 my-5 ms-4 p-1' />
        </Link>
      </div>
      <nav className="md:col-span-8 col-span-0 md:visible invisible flex flex-row content-center">
        {
          headerItems.map((item) => (
            <div className="flex-1 border-l-3 border-white hidden md:inline-block" key={item}>
              <Link href="#" className="text-white text-center w-full inline-block my-5 text-2xl">{item}</Link>
            </div>
          ))
        }
      </nav>
    </header>
  );
}
