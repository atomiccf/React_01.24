import css from './StatsScreen.module.css'
import React, {useContext} from 'react'
import {clearQuestions, fetchQuestions} from '../../redux/questionsSlice.ts'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {clearResult} from '../../redux/settingsSlice.ts'
import {AppContext} from '../../context/context.tsx'

export const StatsScreen: React.FC = () => {
  const context = useContext(AppContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRestartButton = () => {
    // @ts-ignore
    dispatch(fetchQuestions(context?.url))
    navigate('/game')
  }
  const handleAnotherButton = () => {
    dispatch(clearQuestions())
    dispatch(clearResult())
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
      <div className={css.stat_controls}>
        <MenuButton handleButton={handleRestartButton} text="Restart" />
        <MenuButton handleButton={handleAnotherButton} text="Choose another quiz" />
      </div>
    </div>
  )
}
