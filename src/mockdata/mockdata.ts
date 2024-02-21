import {TriviaCategory} from '../interface/interfarce.ts'

export const difficultyData: TriviaCategory[] = [
  {id: 'any', name: 'Any category'},
  {id: 'easy', name: 'Easy'},
  {id: 'medium', name: 'Medium'},
  {id: 'hard', name: 'Hard'},
]

export const typeData: TriviaCategory[] = [
  {id: 'any', name: 'Any Type'},
  {id: 'multiple', name: 'Multiply Choice'},
  {id: 'boolean', name: 'True/False'},
]

export const timeData: TriviaCategory[] = [
  {id: 60, name: '1m'},
  {id: 300, name: '5m'},
]
export const text = 'Do you want to stop this quiz? ?'
export const anyCategory: TriviaCategory = {id: 'any', name: `Any category`}
