import css from './StatsScreen.module.css'
import React from 'react'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'

export const StatsScreen: React.FC = () => {
  return (
    <div className={css.stat_page}>
      <h2 className={css.stat_header}>
        Thank you for completing this quiz. Here are your results !
      </h2>
      <h3>Quiz configuration: </h3>
      <ul>
        <li>Correct answers:</li>
        <li>Type:</li>
        <li>Category:</li>
        <li>Time:</li>
        <li>Difficulty:</li>
        <li>Time spent:</li>
      </ul>
      <div className={css.stat_controls}>
        <MenuButton text="Restart" />
        <MenuButton text="Choose another quiz" />
      </div>
    </div>
  )
}
