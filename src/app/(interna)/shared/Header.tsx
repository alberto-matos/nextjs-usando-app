import { IconMenu2 } from '@tabler/icons-react'
import UserMenu from './UserMenu'

export default function Header() {
  return (
    <header className='flex justify-between items-center p-7 bg-zinc-950'>
      <IconMenu2
        stroke={1}
        className='text-zinc-400 hover:text-zinc-100 cursor-pointer'
      />

      <UserMenu
        userName='Alberto Matos'
        email='alberto@pmibrasil.eti.br'
        urlImage='https://source.unsplash.com/featured/205x205?person'
      />
    </header>
  )
}