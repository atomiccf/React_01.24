import {configureStore} from '@reduxjs/toolkit'
import {SettingsReducer} from './settingsSlice.ts'
import {QuestionsReducer} from './questionsSlice.ts'

export const store = configureStore({
  reducer: {
    settings: SettingsReducer,
    question: QuestionsReducer,
  },
})
