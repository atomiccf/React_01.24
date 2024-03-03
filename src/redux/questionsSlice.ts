import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {QuestionInitialState, questionState} from '../interface/interfarce.ts'
import {Questions} from '../interface/interfarce.ts'
import axios from 'axios'

const initialState: QuestionInitialState = {
  status: '',
  result: [],
}

export const fetchQuestions = createAsyncThunk('questions/FetchQuestions', async url => {
  const response = await axios.get(`${url}`)
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
    builder
      .addCase(fetchQuestions.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchQuestions.fulfilled, (state, action: PayloadAction<Questions[]>) => {
        state.status = 'succeeded'
        state.result = action.payload
      })
  },
})

export const selectQuestions = (state: questionState) => state.question

export const {clearQuestions} = QuestionSlice.actions
export const QuestionsReducer = QuestionSlice.reducer
