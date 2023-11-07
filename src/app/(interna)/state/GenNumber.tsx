"use client"
import React from 'react'
import { useState } from 'react'

export default function GenNumber() {
  const [number, setNumber] = useState<number>(0)

  return (
    <div onClick={() => setNumber(number + 1)}>
      <span className='text-4xl font-black select-none'>{number}</span>
    </div>
  )
}