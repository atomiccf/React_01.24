import React from 'react'
import css from './MenuButton.module.css'
import {motion} from 'framer-motion'
import {MenuButtonProps} from '../../types/types.ts'

export const MenuButton: React.FC<MenuButtonProps> = ({text, handleButton}) => {
  return (
    <motion.button whileTap={{scale: 0.75}} onClick={handleButton} className={css.menu_button}>
      {text}
    </motion.button>
  )
}
