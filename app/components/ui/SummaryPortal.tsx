import { createPortal } from "react-dom"
import Link from 'next/link'

import { useSummaryStore, SummaryItem } from '@/app/stores/SummaryStore'

export type SummaryProps = {
};

export default function SummaryPortal({ }: SummaryProps) {
  const items = useSummaryStore(state => state.items)
  const summaryElement = document.getElementById('summary')
  if (!summaryElement) return null

  return createPortal(
    items.length > 0 ? (
      <div className="hidden md:block ms-8 me-16 mt-16 text-camelot-800">
        <h3 className="text-xl underline ms-8 mb-2">Sommaire du projet</h3>
        <ol className="list-none border-camelot-700 border-x-1 border-t-1 text-xl">
          {items.map((item, index) => (
            item.format == "elements.title" ? (
              <li key={index} className="border-b-1 py-2 px-8 font-bold">
                <Link href={`#title-${item.id}`}>{item.name}</Link>
              </li>
            )
              :
              <li key={index} className="border-b-1 py-2 ps-12 pe-8">
                <Link href={`#sub-title-${item.id}`}>{item.name}</Link>
              </li>
          ))}
        </ol>
      </div >
    ) : null,
    summaryElement
  );
}
