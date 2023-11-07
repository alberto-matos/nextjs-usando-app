import React from "react"

export interface TitleProps {
  title: string
  subtitle?: string
  className?: string
  children?: any
}

export default function Title(props: TitleProps) {
  return (
    <div className={`
      flex items-baseline gap-4
      ${props.className ?? ''}
      `}
    >
      <h3 className='text-2xl font-bold'>
        {props.title}
      </h3>

      {props.subtitle && (
        <h4 className="text-zinc-400">
          {props.subtitle}
        </h4>
      )}

    </div>
  )
}
