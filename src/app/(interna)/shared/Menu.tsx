"use client"
import React from 'react'
import MenuItem from './MenuItem'
import { IconLayoutDashboard, IconLoader, IconBug, IconRoute, IconRoute2, IconArrowsJoin2, IconDatabase } from '@tabler/icons-react'
import MenuGroup from './MenuGroup'
import Search from '../../shared/Search'
import { usePathname } from 'next/navigation'

export default function Menu() {
  const url = usePathname()

  return (
    <nav className='flex flex-col justify-between gap-2 mt-3 p-2 h-full'>
      <div className='flex flex-col gap-2'>
        <MenuItem
          title='Home'
          url='/home'
          icon={<IconLayoutDashboard />}
          selected={url === '/home'}
        />
        <MenuGroup title='Exercícios'>
          <MenuItem
            title='Loading'
            url='/loading'
            icon={<IconLoader />}
            selected={url === '/loading'}
          />
          <MenuItem
            title='Error'
            url='/error'
            icon={<IconBug />}
            selected={url === '/error'}
          />
          <MenuItem
            title='Rota Dinâmica #1'
            url='/dynamic/blog/abc'
            icon={<IconRoute />}
            selected={url === '/dynamic/blog/abc'}
          />
          <MenuItem
            title='Rota Dinâmica #2'
            url='/dynamic/course/abc'
            icon={<IconRoute2 />}
            selected={url === '/dynamic/course/abc'}
          />
          <MenuItem
            title='Rota Paralelas'
            url='/parallels'
            icon={<IconArrowsJoin2 />}
            selected={url === '/parallels'}
          />
          <MenuItem
            title='Estados'
            url='/state'
            icon={<IconDatabase />}
            selected={url === '/state'}
          />
        </MenuGroup>
      </div>
      <Search />
    </nav>
  )
}