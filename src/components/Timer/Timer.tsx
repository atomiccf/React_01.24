import React, {useState, useEffect} from 'react'
import css from '../Timer/Timer.module.css'
import {useNavigate} from 'react-router-dom'
import {TimerProps} from '../../types/types.ts'

export const Timer: React.FC<TimerProps> = ({time}) => {
  const [seconds, setSeconds] = useState<number>(time)
  const minute = String(Math.floor(seconds / 60)).padStart(2, '0')
  const second = String(seconds % 60).padStart(2, '0')
  const navigate = useNavigate()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => Math.max(prevSeconds - 1, 0))
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [time])

  if (seconds === 0) {
    navigate('/stats')
  }
  return (
    <>
      <div className={css.timer}>Time: {`${minute}:${second}`}</div>
    </>
  )
}
