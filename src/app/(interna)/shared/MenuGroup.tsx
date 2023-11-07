import React from 'react'

export interface GroupMenuProps {
  title: string
  className?: string
  children?: any
}

export default function MenuGroup(props: GroupMenuProps) {
  return (
    <div className={`
      flex flex-col py-3 gap-4
      ${props.className ? props.className : ''}
    `}>
      <h3 className='text-zinc-400'>{props.title}</h3>
      <div className='flex flex-col gap-3'>
        {props.children}
      </div>
    </div>
  )
}