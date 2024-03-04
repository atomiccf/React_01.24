import {createSlice} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {statisticsInitialState} from '../interface/interfarce.ts'

const initialState: statisticsInitialState = {
  totalQuestions: 0,
  correctQuestions: 0,
  categoryQuestions: [],
  difficultyQuestions: [],
  typeQuestions: [],
}

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    finishQuiz: (state: statisticsInitialState, action) => {
      state.totalQuestions += action.payload.totalQuestions
      state.correctQuestions += action.payload.correctQuestions
      if (typeof action.payload.category === 'string') {
        const categoryQuestion = state.categoryQuestions.find(
          question => question.category === action.payload.category
        )
        if (categoryQuestion) {
          categoryQuestion.number += action.payload.categoryQuestions
        } else {
          state.categoryQuestions.push({
            category: action.payload.category,
            number: action.payload.categoryQuestions,
          })
        }
      }
      if (typeof action.payload.difficulty === 'string') {
        const difficultyQuestion = state.difficultyQuestions.find(
          question => question.difficulty === action.payload.difficulty
        )
        if (difficultyQuestion) {
          difficultyQuestion.number += action.payload.difficultyQuestions
        } else {
          state.difficultyQuestions.push({
            difficulty: action.payload.difficulty,
            number: action.payload.difficultyQuestions,
          })
        }
      }
      if (typeof action.payload.type === 'string') {
        const typeQuestion = state.typeQuestions.find(
          question => question.type === action.payload.type
        )
        if (typeQuestion) {
          typeQuestion.number += action.payload.typeQuestions
        } else {
          state.typeQuestions.push({
            type: action.payload.type,
            number: action.payload.typeQuestions,
          })
        }
      }
    },
  },
})

export const {finishQuiz} = statisticsSlice.actions
// @ts-ignore
export const selectQuestions = state => state.statistics
const persistConfig = {
  key: 'statistics',
  storage,
}

export const percistedReducer = persistReducer(persistConfig, statisticsSlice.reducer)
