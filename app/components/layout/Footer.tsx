import Image from 'next/image';
import Link from 'next/link';

const zigZagStyle = {
  borderImageSource: 'url("/zigzags/zigzag-footer.svg")',
  borderImageSlice: 52,
  borderImageRepeat: 'repeat',
}

export default function Footer() {
  return (
    <footer className="bg-camelot-800 grid grid-cols-12 text-white">
      <div className="col-span-4 px-8 pt-4 pb-8">
        <ul>
          {
            ["Mentions légales", "CGU", "Plan du site", "License Creative Commons"].map((item) => (
              <li className='mb-2 text-lg' key={item}>
                <Link href="#" className='mb-2 text-lg'>{item}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="col-span-3 border-l-14 border-white border-dashed px-8 pt-4 pb-8"
        style={zigZagStyle}
      >
        <ul>
          <li className='mb-2 text-lg'>
            <Link href="#" className='mb-2 text-lg'>Abonner-vous à la newsletter</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-3 border-l-14 border-white border-dashed px-8 pt-4 pb-8"
        style={zigZagStyle}
      >
        <ul>
          {
            ["Documentation", "Lexique", "Presse"].map((item) => (
              <li className='mb-2 text-lg' key={item}>
                <Link href="#" className='mb-2 text-lg'>{item}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="col-span-2 border-l-14 border-white border-dashed text-[#ffed38] px-8 pt-4 pb-8"
        style={zigZagStyle}
      >
        <Image src="/arrows/arrow-footer.svg" alt="Arrow back to top"
          width={1}
          height={1}
          style={{ height: 'auto', width: '25%' }}
          className="mx-auto" />

        <p className='text-center mt-3'>Retour en haut</p>
      </div>
    </footer>
  );
}
