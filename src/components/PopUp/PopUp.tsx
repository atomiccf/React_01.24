import React from 'react'
import css from './PopUp.module.css'
type PopUpProps = {
  state: string
  text?: string
  handleConfirm?: () => void
  handleCancel?: () => void
}

export const PopUp: React.FC<PopUpProps> = ({state, text, handleConfirm, handleCancel}) => {
  return (
    <div className={state === 'active' ? `${css.modal} ${css.active}` : `${css.modal} `}>
      <div className={css.modal_content}>{text}</div>
      <div className={css.popup_controls}>
        <button onClick={handleConfirm} className={css.popup_button}>
          Confirm
        </button>
        <button onClick={handleCancel} className={css.popup_button}>
          Cancel
        </button>
      </div>
    </div>
  )
}
