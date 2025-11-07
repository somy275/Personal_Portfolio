import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home'
import Applayout from './components/Applayout'
const About=lazy(()=>import('./Pages/About'))
const Work=lazy(()=>import('./Pages/Work'))
const Skills=lazy(()=>import("./Pages/skills"))
const Contact=lazy(()=>import("./Pages/Contact"))

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
          element:<Suspense fallback={ <div className='h-screen text-white flex items-center justify-center py-4 font-medium'>
                <div className='animate-spin   rounded-full h-9 w-9 border-b-2 border-[#43B0F1] mr-2.5'></div>
                <span className="font-medium text-xl lg:text-xl">loading</span>
            </div>}> <About /></Suspense>
        },
        {
          path: '/work',
          element: <Suspense fallback={ <div className='h-screen text-white flex items-center justify-center py-4 font-medium'>
                <div className='animate-spin   rounded-full h-9 w-9 border-b-2 border-[#43B0F1] mr-2.5'></div>
                <span className="font-medium text-xl lg:text-xl">loading</span>
            </div>}> <Work /></Suspense>
        },
        {
          path: '/skills',
          element:<Suspense fallback={ <div className='h-screen text-white flex items-center justify-center py-4 font-medium'>
                <div className='animate-spin   rounded-full h-9 w-9 border-b-2 border-[#43B0F1] mr-2.5'></div>
                <span className="font-medium text-xl lg:text-xl">loading</span>
            </div>}> <Skills /></Suspense>
        },
        {
          path: '/contact',
          element: <Suspense fallback={ <div className='h-screen text-white flex items-center justify-center py-4 font-medium'>
                <div className='animate-spin   rounded-full h-9 w-9 border-b-2 border-[#43B0F1] mr-2.5'></div>
                <span className="font-medium text-xl lg:text-xl">loading</span>
            </div>}> <Contact /></Suspense>
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