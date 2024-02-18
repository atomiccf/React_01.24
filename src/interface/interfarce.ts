export interface TriviaCategory {
  id: number | string
  name: string
}

export interface SettingsInitialState {
  result: FormValues
}

export interface FormValues {
  category: string
  difficulty: string
  type: string
  time: string
  number: string
}

export interface QuestionInitialState {
  result: Questions[]
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
  // eslint-disable-next-line no-unused-vars
  setLink?: (value: string) => void
}
