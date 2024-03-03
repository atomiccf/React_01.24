import React from 'react'

export interface TriviaCategory {
  id: number | string
  name: string
}

export interface statisticsInitialState {
  totalQuestions: number
  correctQuestions: number
  categoryQuestions: Question[]
  difficultyQuestions: Question[]
  typeQuestions: Question[]
}

interface Question {
  category?: string
  difficulty?: string
  type?: string
  number: number
}
export interface SettingsInitialState {
  result: FormValues
}

export interface settingState {
  settings: {
    result: {
      category: {
        value: string
        name: string
      }
      difficulty: string
      type: string
      time: string
      number: string
    }
  }
}

export interface FormValues {
  category: {
    value: string
    name: string
  }
  difficulty: string
  type: string
  time: string
  number: string
}

export interface QuestionInitialState {
  status: string
  result: Questions[]
}

export interface questionState {
  question: {
    status: string
    result: Questions[]
  }
}
export interface questionStatusState {
  status: string
}

export interface Questions {
  category: string
  correct_answer: string
  difficulty: string
  incorrect_answers: string[]
  question: string
  type: string
}

export interface AppContextProps {
  url: string
  endQuestion: boolean
  spentTime: string
  correctAnswers: number
  amountAnswers: number
  // eslint-disable-next-line no-unused-vars
  setLink?: (value: string) => void
  // eslint-disable-next-line no-unused-vars
  setQuestionEnding?: (value: boolean) => void
  // eslint-disable-next-line no-unused-vars
  setTime?: (value: string) => void
  // eslint-disable-next-line no-unused-vars
  setCorrect?: React.Dispatch<React.SetStateAction<number>>
  // eslint-disable-next-line no-unused-vars
  setAmount?: React.Dispatch<React.SetStateAction<number>>
}
