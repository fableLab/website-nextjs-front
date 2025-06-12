import Link from 'next/link';

const zigZagStyle = {
  borderImageSource: 'url("/zigzags/zigzag-footer.svg")',
  borderImageSlice: 52,
  borderImageRepeat: 'repeat',
}

export default function Footer() {
  return (
    <footer className="bg-camelot-800 grid grid-cols-12 text-white">
      <div className="md:col-span-4 col-span-12 px-8 pt-4 pb-8 md:border-r-14 border-white border-dashed"
        style={zigZagStyle}>
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
      <div className="md:col-span-3 col-span-12 px-8 pt-4 pb-8 md:border-r-14 border-white border-dashed"
        style={zigZagStyle}>
        <ul>
          <li className='mb-2 text-lg'>
            <Link href="#" className='mb-2 text-lg'>Abonner-vous à la newsletter</Link>
          </li>
        </ul>
      </div>
      <div className="md:col-span-3 col-span-12 px-8 pt-4 pb-8 md:border-r-14 border-white border-dashed"
        style={zigZagStyle}>
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
      <div className="md:col-span-2 col-span-12 text-[#ffed38] px-8 pt-4 pb-8">
        <img src="/arrows/arrow-footer.svg" className='md:w-1/4 w-1/10 mx-auto' />
        <p className='text-center mt-3'>Retour en haut</p>
      </div>
    </footer>
  );
}
