import React, {createContext, useState} from 'react'
import {AppContextProps} from '../interface/interfarce.ts'
import {AppProviderProps} from '../types/types.ts'

export const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [url, setURL] = useState<string>('')

  const setLink = (value: string) => {
    setURL(value)
  }

  return <AppContext.Provider value={{url, setLink}}>{children}</AppContext.Provider>
}
