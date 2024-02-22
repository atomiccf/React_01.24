import css from './StatsScreen.module.css'
import React, {useContext} from 'react'
import {clearQuestions, fetchQuestions} from '../../redux/questionsSlice.ts'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {clearResult, selectSettings} from '../../redux/settingsSlice.ts'
import {AppContext} from '../../context/context.tsx'
import {timer} from '../../utils/timer.ts'

export const StatsScreen: React.FC = () => {
  const context = useContext(AppContext)
  const settings = useSelector(selectSettings)
  console.log(settings)
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
        <li> {`Correct answers: ${context?.correctAnswers}`}</li>
        <li>{`Type: ${settings.type}`}</li>
        <li>{`Category: ${settings.category.name}`}</li>
        <li>{`Time: ${timer(Number(settings.time))}`}</li>
        <li>{`Difficulty: ${settings.difficulty}`}</li>
        <li> {`Time spent: ${context?.spentTime}`}</li>
      </ul>
      <div className={css.stat_controls}>
        <MenuButton handleButton={handleRestartButton} text="Restart" />
        <MenuButton handleButton={handleAnotherButton} text="Choose another quiz" />
      </div>
    </div>
  )
}
