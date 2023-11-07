import { IconSearch } from "@tabler/icons-react"

export interface SearchProps {
  textInput?: string
  setTextInput?: () => void
  className?: string
}

export default function Search(props: SearchProps) {
  return (
    <div
      className={`
        flex justify-between items-center
        bg-zinc-700 rounded-md p-1
        ${props.className ? props.className : ""}
      `}
    >
      <input
        type="text"
        className="bg-zinc-700 text-white font-normal text-xs focus:outline-none w-full p-1"
        placeholder="Pesquise aqui..."
        value={props.textInput}
      />
      <IconSearch size={20} stroke={2} className="text-zinc-300" />
    </div>
  )
}
