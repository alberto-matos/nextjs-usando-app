import Logo from '../shared/Logo'
import Menu from './shared/Menu'
import Header from './shared/Header'

export interface LayoutProps {
  className?: string
  children?: any
}
export default function Layout(props: LayoutProps) {
  return (
    <div className='flex min-h-screen bg-zinc-900 '>

      <aside className='flex flex-col p-2 gap-12 bg-black border-r border-zinc-800'>
        <Logo />
        <Menu />
      </aside>

      <div className='flex flex-col flex-1 '>
        <Header />
        <main className='flex-1 p-7'>
          {props.children}
        </main>
      </div>
    </div>
  )
}