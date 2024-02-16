import {forwardRef} from 'react'
import css from './MenuInput.module.css'
import {MenuInputProps} from '../../types/types.ts'

export const MenuInput = forwardRef<HTMLInputElement, MenuInputProps>(
  ({handleChange, name}, ref) => {
    return (
      <>
        <label htmlFor={css.menu_input}>
          Number of questions:
          <input
            name={name}
            ref={ref}
            onChange={handleChange}
            id={css.menu_input}
            defaultValue={5}
            type="number"
            min={5}
            max={15}
          />
        </label>
      </>
    )
  }
)
MenuInput.displayName = 'MenuInput'
