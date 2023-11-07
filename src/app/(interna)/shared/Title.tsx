
export interface TitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="
        text-2xl font-black 
        bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
      >
        {props.title}
      </h1>

      {props.subtitle && (
        <h2 className='text-zinc-500 text-sm'>
          {props.subtitle}
        </h2>
      )}

    </div>

  )
}