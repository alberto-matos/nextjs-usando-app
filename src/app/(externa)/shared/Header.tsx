import React from 'react'
import Logo from '@/app/shared/Logo'
import Menu from './Menu'
import Button from '@/app/shared/Button'
import { IconTriangleSquareCircleFilled } from '@tabler/icons-react'

export default function Header() {
  return (
    <header className="
        flex justify-streach items-center 
        h-[64px] w-full py-12
        fixed top-0 left-0
        border-b border-zinc-800
        bg-opacity-80 backdrop-blur-sm
    ">
      <div className="flex items-center w-full h-full mx-4 gap-8">

        <Logo />
        {/* <Search setTextInput={(e) => { }} textInput='' /> */}
        <Menu className='flex flex-1 ' />
        <div className='flex justify-end'>

          <div className='flex flex-col p-1 gap-1 border border-zinc-700 rounded-lg'>
            <Button highlight>Débitos</Button>
            <Button>
              <IconTriangleSquareCircleFilled />
              Atendimento
            </Button>
          </div>

        </div>

      </div>
    </header>
  )
}