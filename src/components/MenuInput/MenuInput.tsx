import React from 'react'
import css from './MenuInput.module.css'

export const MenuInput: React.FC = () => {
  return (
    <>
      <label htmlFor={css.menu_input}>
        Number of questions:
        <input id={css.menu_input} defaultValue={5} type="number" min={5} max={15} />
      </label>
    </>
  )
}
