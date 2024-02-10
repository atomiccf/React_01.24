import React from 'react'
import css from './MenuButton.module.css'

type MenuButtonProps = {
  text: string
  handleButton?: () => void
}

export const MenuButton: React.FC<MenuButtonProps> = ({text, handleButton}) => {
  return (
    <button onClick={handleButton} className={css.menu_button}>
      {text}
    </button>
  )
}
