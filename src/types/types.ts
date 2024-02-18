import {TriviaCategory} from '../interface/interfarce.ts'
import React, {ReactNode} from 'react'

export type MenuSelectProps = {
  name: string
  array: TriviaCategory[]
  labelText: string
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}
export type MenuInputProps = {
  name: string
  ref: HTMLInputElement | undefined
  value: string
  // eslint-disable-next-line no-unused-vars
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export type MenuButtonProps = {
  text: string
  handleButton?: () => void
}

export type PopUpProps = {
  state: string
  text?: string
  handleConfirm?: () => void
  handleCancel?: () => void
}

export type ProgressBarProps = {
  progress: number
  max: number
}

export type TimerProps = {
  time: number
}

export type AppProviderProps = {
  children: ReactNode
}
