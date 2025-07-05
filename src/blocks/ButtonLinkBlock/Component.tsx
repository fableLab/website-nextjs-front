import React from 'react'
import Link from 'next/link'

type Props = {
    label: string
    url: string
}

export const ButtonLinkBlock: React.FC<Props> = ({ label, url }) => {
    return (
        <div className="py-4">
            <Link
                href={url}
                target="_blank"
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-block transition"
            >
                {label}
            </Link>
        </div>
    )
}