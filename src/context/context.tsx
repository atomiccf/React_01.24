import React, {createContext, useState} from 'react'
import {AppContextProps} from '../interface/interfarce.ts'
import {AppProviderProps} from '../types/types.ts'

export const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [url, setURL] = useState<string>('')
  const [endQuestion, setEndQuestion] = useState<boolean>(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [amountAnswers, setAmountAnswers] = useState(0)
  const [spentTime, setSpentTime] = useState<string>('')

  const setLink = (value: string) => {
    setURL(value)
  }
  const setQuestionEnding = (value: boolean) => {
    setEndQuestion(value)
  }

  const setTime = (value: string) => {
    setSpentTime(value)
  }

  const setCorrect = (value: number) => {
    setCorrectAnswers(value)
  }

  const setAmount = (value: number) => {
    setAmountAnswers(value)
  }

  // @ts-ignore
  return (
    <AppContext.Provider
      value={{
        url,
        setLink,
        endQuestion,
        setQuestionEnding,
        spentTime,
        setTime,
        // @ts-ignore
        setAmount,
        // @ts-ignore
        setCorrect,
        correctAnswers,
        amountAnswers,
      }}>
      {children}
    </AppContext.Provider>
  )
}
