import React from 'react'
import css from './MenuButton.module.css'

type MenuButtonProps = {
  text: string
}

export const MenuButton: React.FC<MenuButtonProps> = ({text}) => {
  return <button className={css.menu_button}>{text}</button>
}
