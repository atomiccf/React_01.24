import React from 'react'
import css from './MenuSelect.module.css'

type MenuSelectProps = {
  array: string[]
  labelText: string
}

export const MenuSelect: React.FC<MenuSelectProps> = ({array, labelText}) => {
  return (
    <>
      <label htmlFor={css.menu_select}>
        {labelText}
        <select name="menu_select" id={css.menu_select}>
          {array.map(item => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
    </>
  )
}
