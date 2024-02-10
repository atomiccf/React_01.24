import css from './StatsScreen.module.css'
import React from 'react'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {useNavigate} from 'react-router-dom'
import {PopUp} from '../../components/PopUp/PopUp.tsx'

export const StatsScreen: React.FC = () => {
  const navigate = useNavigate()
  const handleRestartButton = () => {
    navigate('/game')
  }
  const handleAnotherButton = () => {
    navigate('/')
  }
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
      <PopUp state="active" />
      <div className={css.stat_controls}>
        <MenuButton handleButton={handleRestartButton} text="Restart" />
        <MenuButton handleButton={handleAnotherButton} text="Choose another quiz" />
      </div>
    </div>
  )
}
