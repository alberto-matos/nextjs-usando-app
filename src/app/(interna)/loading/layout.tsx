import Title from '../shared/Title'

export default function Layout(props: any) {
  return (
    <div className="h-full">
      <Title
        title='Página de Loading'
        subtitle='Demonstrandando o uso de chamadas assíncronas' />
      <div className="
        flex flex-col h-full justify-center items-center">
        <span>{props.children}</span>
        <span className='text-zinc-700'>Chamada assíncrona</span>
      </div>
    </div>
  )
}