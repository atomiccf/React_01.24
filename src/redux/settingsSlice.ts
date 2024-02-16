import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SettingsInitialState} from '../interface/interfarce.ts'
import {FormValues} from '../interface/interfarce.ts'

const initialState: SettingsInitialState = {
  result: {
    category: '',
    difficulty: '',
    type: '',
    time: '',
    number: '',
  },
}
const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<FormValues>) => {
      state.result = action.payload
    },
    clearResult: () => {
      return initialState
    },
  },
})

export const {setResult,clearResult} = SettingsSlice.actions
export const SettingsReducer = SettingsSlice.reducer
