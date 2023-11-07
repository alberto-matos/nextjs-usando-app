import Link from 'next/link'
import React from 'react'

export default function Links() {
  function render(title: string, url: string) {
    return (
      <Link href={url}
        className='text-zinc-500 text-sm hover:text-zinc-300 transition duration-300'>
        {title}
      </Link>
    )
  }
  return (
    <div className="flex gap-16">
      <div className='flex flex-col gap-5'>
        <h3>Imobiliário</h3>
        <div className="flex flex-col gap-2">
          {render('I.P.T.U', '/')}
          {render('I.T.B.I', '/')}
          {render('Dívida Ativa', '/')}
          {render('Protesto', '/')}
          {render('Planejamento de Obras', '/')}
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h3>Mobiliário</h3>
        <div className="flex flex-col gap-2">
          {render('I.s.s.q.n', '/')}
          {render('Alvará', '/')}
          {render('Taxas diversas', '/')}
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h3>Cidadão</h3>
        <div className="flex flex-col gap-2">
          {render('Certidão Negativa de Débitos (CND)', '/')}
          {render('Levantamento de débitos', '/')}
          {render('Taxas diversas', '/')}
        </div>
      </div>
    </div>
  )
}