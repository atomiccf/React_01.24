import css from './WelcomeScreen.module.css'
import {MenuButton} from '../../components/MenuButton/MenuButton.tsx'
import {MenuInput} from '../../components/MenuInput/MenuInput.tsx'
import {MenuSelect} from '../../components/MenuSelect/MenuSelect.tsx'
import React from 'react'

export const WelcomeScreen: React.FC = () => {
  return (
    <div className={css.main_page}>
      <h1 className={css.main_header}>Virtual Quiz</h1>
      <div className={css.select_menu}>
        <MenuSelect
          labelText={'Select Category:'}
          array={['Any Category', 'Easy', 'Medium', 'Hard']}
        />
        <MenuSelect
          labelText={'Select Difficulty:'}
          array={['Any Difficulty', 'Easy', 'Medium', 'Hard']}
        />
        <MenuSelect
          labelText={'Select Type:'}
          array={['Any Type', 'Multiply Choice', 'True/False']}
        />
        <MenuSelect labelText={'Select Time:'} array={['1m', '2m', '3m']} />
        <MenuInput />
      </div>
      <div className={css.controls}>
        <MenuButton text="Start quiz" />
        <MenuButton text="See my statistics" />
      </div>
    </div>
  )
}
