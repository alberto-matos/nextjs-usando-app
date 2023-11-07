import Link from 'next/link'

export interface MenuItemProps {
  textItem: string
  url: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url}>
      <span className="
        text-zinc-400 
        hover:text-white
        transition duration-300 
        
      ">{props.textItem}</span>
    </Link>
  )
}