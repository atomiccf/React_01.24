import {createBrowserRouter} from 'react-router-dom'

import {WelcomeScreen} from '../screens/WelcomScreen/WelcomeScreen'
import {GameScreen} from '../screens/GameScreen/GameScreen.tsx'
import {StatsScreen} from '../screens/StatsScreen/StatsScreen.tsx'
import App from '../App.tsx'
import {StatisticScreen} from '../screens/StatisticScreen/StatisticScreen.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <WelcomeScreen />,
      },
      {
        path: '/game',
        element: <GameScreen />,
      },
      {
        path: '/stats',
        element: <StatsScreen />,
      },
      {
        path: '/statistics',
        element: <StatisticScreen />,
      },
    ],
  },
])
