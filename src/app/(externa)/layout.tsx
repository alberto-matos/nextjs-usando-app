import Header from './shared/Header'
import Footer from './shared/Footer'

export default function Layout(props: any) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Header/>
      <main className='mt-[64px] w-3/4 py-5'>
        {props.children}
      </main>
      <Footer/>
    </div>
  )
}