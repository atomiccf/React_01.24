import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {QuestionInitialState} from '../interface/interfarce.ts'
import {Questions} from '../interface/interfarce.ts'
import axios from 'axios'

const initialState: QuestionInitialState = {
  result: [],
}

export const fetchQuestions = createAsyncThunk('questions/FetchQuestions', async url => {
  // @ts-ignore
  const response = await axios.get(`${url}`)
  console.log(response)
  return response.data.results
})

const QuestionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    clearQuestions: () => {
      return initialState
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Questions[]>) => {
      console.log('Fulfilled Action Payload:', action.payload)
      state.result = action.payload
    })
  },
})

// @ts-ignore
export const selectQuestions = state => state.question

export const {clearQuestions} = QuestionSlice.actions
export const QuestionsReducer = QuestionSlice.reducer
