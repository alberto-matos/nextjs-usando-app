import React from "react"
import Main from "@/app/(externa)/landing/Main"
import Title from './shared/Title'
import Resources from './landing/Resources'

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <Main />
      <Title title='Nossos Produtos?' subtitle='Módulos destinados ao gerenciamento das receitas próprias do município, a fim de agilizar a tomada de decisão!' />
      <Resources />
    </div>
  )
}
