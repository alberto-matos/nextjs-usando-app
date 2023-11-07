import GenNumber from './GenNumber'
import Title from '../shared/Title'

export default function State() {
  return (
    <div className='flex flex-col gap-5'>
      <Title title='Usando Estado' subtitle='Componente react com estado' />
      <GenNumber />
    </div>
  )
}