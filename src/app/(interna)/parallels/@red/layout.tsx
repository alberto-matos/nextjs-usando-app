import React from 'react'

export default async function Layout(props: any) {
  return (
    <div className='flex flex-col justify-center items-center text-4xl font-black h-36 bg-red-700'>
      <span>{props.children}</span>
    </div>
  )
}