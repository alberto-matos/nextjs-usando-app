import React from 'react'
import Resource from './Resource'

export default function Resources() {
  return (
    <div className="flex justify-center items-center pb-[48px]">
      <div className="grid grid-cols-3 grid-rows-1">
        <Resource
          title='I.P.T.U.'
          subtitle='Lançamento automatizado de IPTU'
          imageUrl='https://source.unsplash.com/featured/250x300' />
        <Resource
          title='I.S.S.Q.N'
          subtitle='Gerencimento do Momento econômico do município'
          imageUrl='https://source.unsplash.com/featured/250x301' />
        <Resource
          title='N.F.S-e'
          subtitle='Emissão de notas fiscais eletrônicas'
          imageUrl='https://source.unsplash.com/featured/250x303' />
        <Resource
          title='I.P.T.U.'
          subtitle='Lançamento automatizado de IPTU'
          imageUrl='https://source.unsplash.com/featured/251x300' />
        <Resource
          title='I.S.S.Q.N'
          subtitle='Gerencimento do Momento econômico do município'
          imageUrl='https://source.unsplash.com/featured/252x300' />
        <Resource
          title='N.F.S-e'
          subtitle='Emissão de notas fiscais eletrônicas'
          imageUrl='https://source.unsplash.com/featured/253x300' />
      </div>

    </div>
  )
}