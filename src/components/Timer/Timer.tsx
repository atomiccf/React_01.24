import React, {useState, useEffect} from 'react'
import css from '../Timer/Timer.module.css'
import {useNavigate} from 'react-router-dom'

type MenuSelectProps = {
  time: string
}

export const Timer: React.FC<MenuSelectProps> = ({time}) => {
  const [seconds, setSeconds] = useState<number>(60)
  const minute = String(Math.floor(seconds / 60)).padStart(2, '0')
  const second = String(seconds % 60).padStart(2, '0')
  const navigate = useNavigate()
  useEffect(() => {
    switch (time) {
      case '1m':
        setSeconds(60)
        break
      case '5m':
        setSeconds(300)
        break
      default:
        break
    }
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
