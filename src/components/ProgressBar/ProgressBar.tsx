import React from 'react'
import css from '../ProgressBar/ProgressBar.module.css'
import {useNavigate} from 'react-router-dom'

type ProgressBarProps = {
  progress: number
  max: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({progress, max}) => {
  const navigate = useNavigate()
  if (progress === max) {
    navigate('/stats')
  }

  return (
    <>
      <label htmlFor="1">Progress:</label>
      <progress id="1" className={css.progress} value={progress} max={max} />
    </>
  )
}
