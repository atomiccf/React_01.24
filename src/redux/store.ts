import {configureStore} from '@reduxjs/toolkit'
import {SettingsReducer} from './settingsSlice.ts'
import {QuestionsReducer} from './questionsSlice.ts'
import {percistedReducer} from './statisticsSlice.ts'

export const store = configureStore({
  reducer: {
    settings: SettingsReducer,
    question: QuestionsReducer,
    statistics: percistedReducer,
  },
})
