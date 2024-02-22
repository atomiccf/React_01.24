import React, {useState, useEffect, useContext} from 'react'
import css from '../Timer/Timer.module.css'
import {useNavigate} from 'react-router-dom'
import {TimerProps} from '../../types/types.ts'
import {AppContext} from '../../context/context.tsx'
import {timer} from '../../utils/timer.ts'
import {useDispatch, useSelector} from 'react-redux'
import {selectSettings} from '../../redux/settingsSlice.ts'
import {finishQuiz} from '../../redux/statisticsSlice.ts'

export const Timer: React.FC<TimerProps> = ({time}) => {
  const [seconds, setSeconds] = useState<number>(time)
  const navigate = useNavigate()
  const context = useContext(AppContext)
  const dispatch = useDispatch()
  const settings = useSelector(selectSettings)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => Math.max(prevSeconds - 1, 0))
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [time])

  if (context?.endQuestion === true) {
    let spentTime = timer(time - seconds)
    context?.setTime!(spentTime)
  }
  useEffect(() => {
    if (seconds === 0) {
      let spentTime = timer(time - seconds)
      context?.setTime!(spentTime)
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
  }, [seconds])

  return (
    <>
      <div className={css.timer}>Time: {timer(seconds)}</div>
    </>
  )
}
