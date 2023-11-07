import MenuItem from './MenuItem'

export interface MenuProps {
  className?: string
  children?: any
}
export default function Menu(props: MenuProps) {
  return (
    <div className={`
      ${props.className ? props.className : ''}
      flex gap-4 text-sm flex-wrap 
    `}>
      <MenuItem textItem="Contribuintes" url="/" />
      <MenuItem textItem="Imobiliário" url="/" />
      <MenuItem textItem="Econômico" url="/" />
      <MenuItem textItem="Divida Ativa" url="/" />
      <MenuItem textItem="Configurações" url="/" />
    </div>
  )
}