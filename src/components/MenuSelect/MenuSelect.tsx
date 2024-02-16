import {forwardRef} from 'react'
import css from './MenuSelect.module.css'
import {MenuSelectProps} from '../../types/types.ts'

export const MenuSelect = forwardRef<HTMLSelectElement, MenuSelectProps>(
  ({array, labelText, handleChange, name}, ref) => {
    return (
      <>
        <label htmlFor={css.menu_select}>
          {labelText}
          <select name={name} onChange={handleChange} id={css.menu_select} ref={ref}>
            {array.map(item => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
      </>
    )
  }
)
MenuSelect.displayName = 'MenuSelect'
