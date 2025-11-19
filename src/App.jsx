import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home'
import Applayout from './components/Applayout'
const About=lazy(()=>import('./Pages/About')) //lazily loaded component, loaded only when needed
const Work=lazy(()=>import('./Pages/Work')) //lazily loaded component, loaded only when needed
const Skills=lazy(()=>import("./Pages/Skills")) //lazily loaded component, loaded only when needed
const Contact=lazy(()=>import("./Pages/Contact")) //lazily loaded component, loaded only when needed

const App = () => {
// Create a router instance 
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
            </div>}> <About /></Suspense> // It shows loading spinner until component is loaded
        },
        {
          path: '/work',
          element: <Suspense fallback={ <div className='h-screen text-white flex items-center justify-center py-4 font-medium'>
                <div className='animate-spin   rounded-full h-9 w-9 border-b-2 border-[#43B0F1] mr-2.5'></div>
                <span className="font-medium text-xl lg:text-xl">loading</span>
            </div>}> <Work /></Suspense> // It shows loading spinner until component is loaded
        },
        {
          path: '/skills',
          element:<Suspense fallback={ <div className='h-screen text-white flex items-center justify-center py-4 font-medium'>
                <div className='animate-spin   rounded-full h-9 w-9 border-b-2 border-[#43B0F1] mr-2.5'></div>
                <span className="font-medium text-xl lg:text-xl">loading</span>
            </div>}> <Skills /></Suspense>  // It shows loading spinner until component is loaded
        },
        {
          path: '/contact',
          element: <Suspense fallback={ <div className='h-screen text-white flex items-center justify-center py-4 font-medium'>
                <div className='animate-spin   rounded-full h-9 w-9 border-b-2 border-[#43B0F1] mr-2.5'></div>
                <span className="font-medium text-xl lg:text-xl">loading</span>
            </div>}> <Contact /></Suspense>   // It shows loading spinner until component is loaded
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