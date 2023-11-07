import React from 'react'

export default function Layout(props: any) {
  return (
    <div className="
      flex justify-center items-center 
      text-4xl font-black h-36 
      bg-yellow-500">
      {props.children}
    </div>
  )
}