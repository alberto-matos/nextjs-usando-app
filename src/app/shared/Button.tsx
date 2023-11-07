import React from "react"
import Link from "next/link"

export interface ButtonProps {
  url?: string
  highlight?: boolean
  onClick?: (e: any) => void
  greater?: boolean
  children?: any
}

export default function Button(props: ButtonProps) {
  function handerButton() {
    return (
      <button
        className={`
        ${props.highlight
            ? "bg-zinc-100 text-black hover:bg-zinc-300"
            : "bg-zinc-950 text-zinc-200 border border-zinc-700 hover:bg-zinc-700"
          }
        font-semibold
        transition duration-300
        ${props.greater ? "px-5 py-3" : "px-3 py-1.5"}
        rounded-lg
        flex justify-center items-center gap-2
      `}
      >
        {props.children}
      </button>
    )
  }
  return props.url ? (
    <Link href={props.url}>{handerButton()}</Link>
  ) : (
    handerButton()
  )
}
