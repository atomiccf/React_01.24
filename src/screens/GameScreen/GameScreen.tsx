import css from './GameScreen.module.css'
import React, {useContext, useEffect, useState} from 'react'
import {ProgressBar} from '../../components/ProgressBar/ProgressBar.tsx'
import {Timer} from '../../components/Timer/Timer.tsx'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {PopUp} from '../../components/PopUp/PopUp.tsx'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { fetchQuestions, selectQuestions } from "../../redux/questionsSlice.ts";
import {AppContext} from '../../context/context.tsx'

export const GameScreen: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [activeValue, setActiveValue] = useState<string>('hidden')
  const text = 'Do you want to stop this quiz? ?'
  const context = useContext(AppContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // @ts-ignore
  const questions = useSelector(selectQuestions)
  // @ts-ignore
  const settingsSelector = useSelector(state => state.settings)

  console.log(questions)

  const quiz = questions
  const {result} = quiz
  const currentQuestion = result[activeQuestion]

  const checkAnswer = (): void => {
    if (currentQuestion) {
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
  useEffect(() => {
    console.log('Questions updated:', questions)
  }, [questions])
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
      {!currentQuestion && (
        <div className={css.end_notification}>Loading...</div>
      )}
    </div>
  )
}
