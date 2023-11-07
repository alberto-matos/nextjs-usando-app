import React from "react"
import Button from "../../shared/Button"

export default function Main() {
  return (
    <div className="flex flex-col p-6 gap-y-10 justify-center items-center">
      <h1
        className="
        text-6xl font-black text-center
        bg-clip-text text-transparent bg-gradient-to-b from-white to-orange-600 
      "
      >
        Gerenciamento de Receitas Próprias
      </h1>
      <h2 className="text-zinc-500 w-3/4">
        IPTU - Tenha acesso ao seu IPTU e serviços imobiliários de forma rápida
        e prática. Simplifique a gestão de seus imóveis. ISS Efetue sua
        declaração do Movimento Econômico e emita guias de ISS ou certidões para
        comprovação e regularização. Nota Fiscal Acesso a emissão de Nota Fiscal
        Eletrônica de Serviços (Normal e Avulsa). Simplifique sua rotina fiscal.
      </h2>
      <div className="flex gap-4">
        <Button url="/home" highlight greater>
          Acessar
        </Button>
        <Button url="/home" greater>
          Quem Somos?
        </Button>
      </div>
    </div>
  )
}
