import Image from 'next/image'

export interface UserMenuProps {
  userName: string
  email: string
  urlImage?: string
  className?: string
}
export default function UserMenu(props: UserMenuProps) {
  const urlImge = props.urlImage ? props.urlImage : ''
  return (
    <nav className='flex items-center'>
      <div className='flex flex-col text-xs'>
        <p className='text-zinc-300 font-bold'>{props.userName}</p>
        <p className='text-zinc-500 '>{props.email}</p>
      </div>
      <Image
        src={urlImge}
        alt='Imagem do usuário'
        width={70}
        height={70}
        className='rounded-full ml-4'
      />
    </nav>
  )
}