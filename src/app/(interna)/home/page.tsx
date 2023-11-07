import React from 'react'
import Title from '@/app/(interna)/shared/Title'
import FastAccess from '@/app/(interna)/home/fastAccess'
import { IconArrowsJoin2, IconBug, IconDatabase, IconLoader, IconRoute, IconRoute2 } from '@tabler/icons-react'

export default function Page() {
  return (
    <div>
      <Title title="Página Principal" subtitle='Acesso rápido às funções mais utilizadas pelo usuário' />
      <div className='py-10'>
        <div className="grid grid-cols-3 gap-20 p-20">
          <FastAccess title='Loading' icon={<IconLoader />} url='/loading' />
          <FastAccess title='Error' icon={<IconBug />} url='/error' />
          <FastAccess title='Rota Dinâmica #1' icon={<IconRoute />} url='/dynamic/blog/abc?address=rua felipe schmidt' />
          <FastAccess title='Rota Dinâmica #2' icon={<IconRoute2 />} url='/dynamic/course/abc?address=rua xpto' />
          <FastAccess title='Rota Paralela' icon={<IconArrowsJoin2 />} url='/parallels' />
          <FastAccess title='Estado' icon={<IconDatabase />} url='/state' />
        </div>
      </div>
    </div>
  )
}