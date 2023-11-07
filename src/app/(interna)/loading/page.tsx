import React from 'react'

function LoadingApi(): Promise<number> {
  return (
    new Promise((resolve) => {
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

