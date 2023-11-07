import Image from 'next/image'
import React from 'react'

export interface ResourceProps {
  title: string
  subtitle?: string
  imageUrl: string
}

export default function Resource(props: ResourceProps) {
  return (
    <div className="flex flex-col border border-zinc-700 rounded-xl p-5 w-4/5 mb-5">
      <Image src={props.imageUrl} alt="Imagem do recurso" width={250} height={300} className='self-center rounded-xl mb-5' />
      <h3 className="text-2xl font-bold">{props.title}</h3>
      {props.subtitle && (
        <h4 className="text-sm text-zinc-400">{props.subtitle}</h4>
      )}
    </div>
  )
}