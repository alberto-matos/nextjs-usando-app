import Link from 'next/link'
import React from 'react'

export interface FastAccessProps {
  title: string
  icon: any
  url: string
}

export default function FastAccess(props: FastAccessProps) {
  return (
    <Link href={props.url}
      className="
        flex flex-col items-center w-full
        border border-zinc-700 rounded-md overflow-hidden">
      {React.cloneElement(props.icon, {
        size: 80,
        stroke: 1,
        className: 'py-3'
      })}
      <h3 className='flex justify-center w-full p-3 bg-gradient-to-br from-orange-300 bg-orange-700'>
        {props.title}
      </h3>
    </Link>
  )
}