import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router/AppRouter'
import LandingPage from './components/pages/LandingPage'
import AppContext from './context/AppContext'

const App = () => {
  return (
    <AppContext>
   < RouterProvider router={router}>
    <LandingPage></LandingPage>
   </RouterProvider>
   </AppContext>

  )
}

export default App