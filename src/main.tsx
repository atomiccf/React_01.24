import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './redux/store.ts'
import {RouterProvider} from 'react-router-dom'
import {AppProvider} from './context/context.tsx'
import './index.css'
import {router} from './routes/PagesRouter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppProvider>
  </React.StrictMode>
)
