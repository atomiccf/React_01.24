import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './redux/store.ts'
import {RouterProvider} from 'react-router-dom'
import {AppProvider} from './context/context.tsx'
import './index.css'
import {router} from './routes/PagesRouter.tsx'
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
const persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </AppProvider>
  </React.StrictMode>
)
