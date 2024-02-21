import css from './GameScreen.module.css'
import React, {useContext, useEffect, useState} from 'react'
import {ProgressBar} from '../../components/ProgressBar/ProgressBar.tsx'
import {Timer} from '../../components/Timer/Timer.tsx'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {PopUp} from '../../components/PopUp/PopUp.tsx'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {fetchQuestions, selectQuestions} from '../../redux/questionsSlice.ts'
import {AppContext} from '../../context/context.tsx'
import {text} from '../../mockdata/mockdata.ts'

export const GameScreen: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [activeValue, setActiveValue] = useState<string>('hidden')

  const context = useContext(AppContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // @ts-ignore
  const questions = useSelector(selectQuestions)
  // @ts-ignore
  const settingsSelector = useSelector(state => state.settings)
  const quiz = questions
  const {result} = quiz
  const currentQuestion = result[activeQuestion]

  const checkAnswer = (EO: React.MouseEvent<HTMLElement>): void => {
    if (currentQuestion) {
      if (EO.currentTarget.innerText === currentQuestion.correct_answer) {
        context?.setCorrect!(prev => prev + 1)
        context?.setAmount!(prev => prev + 1)
      }
      context?.setAmount!(prev => prev + 1)
      setActiveQuestion(prev => prev + 1)
    }
  }

  const handleEndQuizButton = (): void => {
    setActiveValue('active')
  }

  const handleCancel = (): void => {
    setActiveValue('hidden')
  }

  const handleConfirm = (): void => {
    navigate('/')
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchQuestions(context?.url))
  }, [dispatch])
  return (
    <div className={css.game_page}>
      <div className={css.progress_control}>
        <MenuButton handleButton={handleEndQuizButton} text="End quiz" />
        <ProgressBar progress={activeQuestion} max={result.length} />
        <Timer time={settingsSelector.result.time} />
      </div>
      <PopUp
        state={activeValue}
        text={text}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
      />
      {currentQuestion && (
        <>
          <div className={css.questions}>{currentQuestion.question}</div>
          <div className={css.answers_container}>
            {currentQuestion.incorrect_answers.map((item: string) => (
              <button className={css.answers_button} onClick={checkAnswer} key={item}>
                {item}
              </button>
            ))}
            <button className={css.answers_button} onClick={checkAnswer}>
              {currentQuestion.correct_answer}
            </button>
          </div>
        </>
      )}
      {!currentQuestion && <div className={css.end_notification}>Loading...</div>}
    </div>
  )
}
