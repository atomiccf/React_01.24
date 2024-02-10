import {createBrowserRouter} from 'react-router-dom'

import {WelcomeScreen} from '../screens/WelcomScreen/WelcomeScreen'
import {GameScreen} from '../screens/GameScreen/GameScreen.tsx'
import {StatsScreen} from '../screens/StatsScreen/StatsScreen.tsx'
import App from '../App.tsx'

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
    ],
  },
])
