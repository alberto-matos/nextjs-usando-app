import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <Image src={'/loading-transp.gif'}
      width={60} height={60} alt={'Loading'}
    />
  )
}