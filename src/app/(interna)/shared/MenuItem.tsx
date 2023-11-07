import Link from 'next/link'
import React from 'react'

export interface MenuItemProps {
  url: string
  title: string
  selected?: boolean
  icon?: any
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url}
      className={`
        flex items-center gap-2 
        ${props.selected ? 'text-zinc-100' : 'text-zinc-500'}
        hover:text-zinc-100 transition duration-300
      `}>
      {props.icon}
      <span>
        {props.title}
      </span>
    </Link>
  )
}