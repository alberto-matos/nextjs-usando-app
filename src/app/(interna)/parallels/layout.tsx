import React from 'react'

export default function Parallels(props: any) {
  return (
    <div>
      {props.children}
      <div className='grid grid-cols-3 gap-5'>
        {props.green}
        {props.yellow}
        {props.red}
      </div>
    </div>
  )
}