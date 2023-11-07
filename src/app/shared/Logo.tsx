import React from "react"
import Link from "next/link"
import { IconCircleFilled, IconSquare } from "@tabler/icons-react"

export default function Logo() {
  return (
    <Link href="/" className="flex justify-center items-center gap-2">
      <div className="flex justify-center items-center w-10 h-10 relative rotate-45">
        <IconSquare stroke={1} size={40} className="text-orange-600 absolute" />
        <IconSquare stroke={5} size={20} className="text-orange-400 absolute" />
        <IconCircleFilled size={8} className="text-red-200 absolute" />
      </div>
      <span
        className="
           font-black text-3xl 
           bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent
        "
      >
        My Application
      </span>
    </Link>
  )
}
