"use client"
import React from 'react'
import { IconMoodSadSquint } from '@tabler/icons-react'

export default function Error(props: any) {
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      <IconMoodSadSquint size={150} stroke={1} className='text-red-500' />
      <span className='text-4xl font-black'>Erro Inesperado</span>
      <span className='text-sm text-zinc-500'>Acione seu suporte</span>
    </div>
  )
}