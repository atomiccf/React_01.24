import React from 'react'
import css from './MenuButton.module.css'
import {MenuButtonProps} from '../../types/types.ts'

export const MenuButton: React.FC<MenuButtonProps> = ({text, handleButton}) => {
  return (
    <button onClick={handleButton} className={css.menu_button}>
      {text}
    </button>
  )
}
