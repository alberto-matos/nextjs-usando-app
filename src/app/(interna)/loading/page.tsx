import React from 'react'
import Title from '../shared/Title'

function LoadingApi(): Promise<number> {
  return (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((Math.random() * 100).toFixed(0) as any)
      }, 2000)
    })
  )
}

export default async function Loading() {
  const ResApi = await LoadingApi()
  return (
    <div>
      <span className='text-6xl'>{ResApi.toString()}</span>
    </div>
  )
}

