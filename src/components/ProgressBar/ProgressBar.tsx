import React, {useContext, useEffect} from 'react'
import css from '../ProgressBar/ProgressBar.module.css'
import {useNavigate} from 'react-router-dom'
import {ProgressBarProps} from '../../types/types.ts'
import {AppContext} from '../../context/context.tsx'
import {useDispatch, useSelector} from 'react-redux'
import {selectQuestions} from '../../redux/questionsSlice.ts'
import {finishQuiz} from '../../redux/statisticsSlice.ts'
import {selectSettings} from '../../redux/settingsSlice.ts'

export const ProgressBar: React.FC<ProgressBarProps> = ({progress, max}) => {
  const navigate = useNavigate()
  const context = useContext(AppContext)
  const status = useSelector(selectQuestions)
  const settings = useSelector(selectSettings)
  const dispatch = useDispatch()
  console.log(status.status)
  useEffect(() => {
    if (status.status === 'succeeded' && progress === max) {
      context?.setQuestionEnding!(true)
      console.log(settings)
      dispatch(
        finishQuiz({
          totalQuestions: context?.amountAnswers,
          correctQuestions: context?.correctAnswers,
          category: settings.category.name,
          categoryQuestions: Number(settings.number),
          difficulty: settings.difficulty,
          difficultyQuestions: Number(settings.number),
          type: settings.type,
          typeQuestions: Number(settings.number),
        })
      )
      navigate('/stats')
    }
    console.log(status)
  }, [progress, max, navigate, status])

  return (
    <>
      <label htmlFor="1">Progress:</label>
      <progress id="1" className={css.progress} value={progress} max={max} />
    </>
  )
}
