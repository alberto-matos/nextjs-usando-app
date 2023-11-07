import Logo from '@/app/shared/Logo'
import Search from '@/app/shared/Search'
import React from 'react'
import Links from './Links'
import { IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="
      flex justify-center items-center px-14 py-7
      w-full 
      bg-opacity-50
      
      backdrop-blur-sm
      border-t border-zinc-800
    ">
      <div className="flex flex-col w-[1100px] ">
        <div className='flex gap-20 items-start'>
          <Logo />
          <Links />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-zinc-400">© {new Date().getFullYear()} Bauhaus Sistemas</span>
          <div className="flex gap-2">
            <IconBrandTwitter size={32} stroke={1}
              className="text-zinc-400 hover:text-zinc-200 hover:cursor-pointer" />
            <span className="text-zinc-700">|</span>
            <IconBrandInstagram size={32} stroke={1}
              className="text-zinc-400 hover:text-zinc-200 hover:cursor-pointer"
            />
          </div>
        </div>

        <div className='fixed right-2'>
          <Search setTextInput={() => { }} textInput='' />
        </div>

      </div>

    </footer>
  )
}