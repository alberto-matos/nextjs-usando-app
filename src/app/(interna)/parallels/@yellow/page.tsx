import React from 'react'

function LoadingApi(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Amarela'), 2000)
  })
}

export default async function Yellow() {
  const msg = await LoadingApi()
  return <span>{msg}</span>
}