import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import ScrollToTop from './ScrollToTop.tsx'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  const zigZagStyle = {
    borderImageSource: 'url("/zigzags/zigzag-footer.svg")',
    borderImageSlice: 52,
    borderImageRepeat: 'repeat',
  }

  return (
    <footer className="bg-camelot-800 grid grid-cols-12 text-white">
      <div className="md:col-span-4 col-span-12 px-8 pt-4 pb-8 md:border-r-[14px] border-white border-dashed"
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
      <div className="md:col-span-3 col-span-12 px-8 pt-4 pb-8 md:border-r-[14px] border-white border-dashed"
        style={zigZagStyle}>
        <ul>
          <li className='mb-2 text-lg'>
            <Link href="#" className='mb-2 text-lg'>Abonner-vous à la newsletter</Link>
          </li>
        </ul>
      </div>
      <div className="md:col-span-3 col-span-12 px-8 pt-4 pb-8 md:border-r-[14px] border-white border-dashed"
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
      <ScrollToTop />
    </footer>
  )
}
