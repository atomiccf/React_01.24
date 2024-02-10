import css from './GameScreen.module.css'
import React, {useState} from 'react'
import {ProgressBar} from '../../components/ProgressBar/ProgressBar.tsx'
import {Timer} from '../../components/Timer/Timer.tsx'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {PopUp} from '../../components/PopUp/PopUp.tsx'
import {useNavigate} from 'react-router-dom'

export const GameScreen: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [activeValue, setActiveValue] = useState<string>('hidden')
  const text = 'Do you want to stop this quiz? ?'
  const navigate = useNavigate()

  const quiz = {
    results: [
      {
        type: 'multiple',
        difficulty: 'medium',
        category: 'Entertainment: Video Games',
        question: 'Which of these is NOT a game under the Worms series?',
        correct_answer: 'Major Malfunction',
        incorrect_answers: ['The Hotshot', 'Richard Branson', 'Junkrat and Roadhog'],
      },
      {
        type: 'multiple',
        difficulty: 'hard',
        category: 'Entertainment: Video Games',
        question: 'In the original DOOM (1993) which of the following is NOT a cheat code?',
        correct_answer: 'IDCLIP',
        incorrect_answers: ['The Hotshot', 'Richard Branson', 'Junkrat and Roadhog'],
      },

      {
        type: 'boolean',
        difficulty: 'easy',
        category: 'Animals',
        question:
          'In 2016, the IUCN reclassified the status of Giant Pandas from endangered to vulnerable.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
      },
    ],
  }
  const {results} = quiz
  const currentQuestion = results[activeQuestion]
  const [countQuestions] = useState<number>(results.length)

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

  return (
    <div className={css.game_page}>
      <div className={css.progress_control}>
        <MenuButton handleButton={handleEndQuizButton} text="End quiz" />
        <ProgressBar progress={activeQuestion} max={countQuestions} />
        <Timer time="1m" />
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
        <div className={css.end_notification}>You have already answered all questions !</div>
      )}
    </div>
  )
}
