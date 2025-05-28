import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home'
import Applayout from './components/Applayout'
import About from './Pages/About'
import Work from './Pages/Work'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/work',
          element: <Work />
        },
        {
          path: '/skills',
          element: <Skills />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App