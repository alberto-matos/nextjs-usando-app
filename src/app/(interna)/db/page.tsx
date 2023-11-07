import React from 'react'
import Title from '../shared/Title'

// export const revalidate = 10

async function getDados() {
  const url = 'http://localhost:3000/db/products'
  const products = await fetch(url, {
    next: {
      revalidate: 10
    },
    // cache: 'no-cache'      
  })
  return products.json()
}

export default async function Dados() {
  const products = await getDados()

  return (
    <div className='flex flex-col gap-10'>
      <Title title='Usando API' subtitle='Recuperando dados por API' />
      <div>
        Produtos
        {products.map((product: any) => {
          return (
            <div
              key={product.id}
              className="
                grid grid-cols-4 gap-2
                odd:bg-zinc-700 even:bg-zinc-950">
              <span className='flex justify-end'>{product.id}</span>
              <span>{product.name}</span>
              <span className='flex justify-end'>{product.price}</span>
              <span>{new Date(product.date).toLocaleTimeString()}</span>
            </div>
          )
        })}

      </div>
    </div>
  )
}