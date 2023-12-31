import React from 'react'
import Title from '../../../shared/Title'

export default function CourseDynamic(props: any) {
  return (
    <div>
      <Title title='Rota Dinâmica #2' />
      <span>Id: {props.params.id}</span>
      <pre className='bg-zinc-950 rounded-lg border border-zinc-700 p-2'>
        <span>{JSON.stringify(props, null, 4)}</span>
      </pre>
    </div>
  )
}