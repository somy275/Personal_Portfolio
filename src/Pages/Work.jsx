import React, { useEffect, useRef, useState } from 'react'
import WorldAtlas from '../Projects/WorldAtlas'
import SmoothScroll from '../Projects/SmoothScroll'
import ToDo from '../Projects/ToDo'
import CurrencyConvert from '../Projects/CurrencyConvert'
import Jarvis from '../Projects/Jarvis'
import ImageProcessor from '../Projects/ImageProcessor'

const Work = () => {
  const [ProjectsShow, setProjectsShow] = useState([])
  const loaderRef = useRef()

  const Projects = [
    {id:0, project:<ImageProcessor/>},
    {id:1, project:<WorldAtlas/>},
    {id:2, project:<SmoothScroll/>},
    {id:3, project:<ToDo/>},
    {id:4, project:<CurrencyConvert/>},
    {id:5, project:<Jarvis/>}
  ]

  // Generator function
  function* Generator(data){
    let idx = 0;
    while(idx < data.length){
      yield data[idx++]
    }
  }

  // Store generator in ref to persist between renders
  const genRef = useRef(Generator(Projects))

  // Load ONE project per scroll
  const loadMoreData = () => {
    const { value, done } = genRef.current.next()
    if (done) return
    setProjectsShow(prev => [...prev, value.project])
  }

  useEffect(() => {
    loadMoreData()
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMoreData()
        }
      },
      { threshold: 0.2 } // trigger slightly before fully visible
    )

    if(loaderRef.current){
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className='relative h-auto w-screen flex flex-col items-center'>
      <h2 className='mt-[2rem] lg:m-0 w-fit relative z-[2] bg-[#0B111E] text-center text-[max(1rem,7vw)] min-[450px]:text-[max(2rem,5.5vw)] md:text-[max(2.6rem,5vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] text-[#43b0f1] border-[1.5px] rounded-lg border-solid border-[#057DCD] px-[0.5rem] py-[0.2rem] font-bold'>Latest Works</h2>

      {ProjectsShow.map((project, idx) => (
        <div key={idx}>{project}</div>
      ))}

      <div className='hidden lg:block absolute top-0 bottom-0 z-[1] w-[0.1rem] bg-[#43b0f1] h-auto opacity-[.5]'></div>

      {ProjectsShow.length < Projects.length && (
        <div ref={loaderRef} className='h-auto z-[9] bg-[#0B111E] opacity-[7] text-white flex items-center justify-center py-4 font-medium'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#43B0F1] mr-2.5'></div>
          <span className="font-medium text-md ">Loading more Projects....</span>
        </div>
      )}
    </section>
  )
}

export default Work
