import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SettingsInitialState, settingState} from '../interface/interfarce.ts'
import {FormValues} from '../interface/interfarce.ts'

const initialState: SettingsInitialState = {
  result: {
    category: {value: '', name: ''},
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

export const selectSettings = (state: settingState) => state.settings.result
export const {setResult, clearResult} = SettingsSlice.actions
export const SettingsReducer = SettingsSlice.reducer
