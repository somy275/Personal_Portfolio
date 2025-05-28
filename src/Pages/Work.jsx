import React from 'react'
import WorldAtlas from '../Projects/WorldAtlas'
import SmoothScroll from '../Projects/SmoothScroll'
import ToDo from '../Projects/ToDo'
import CurrencyConvert from '../Projects/CurrencyConvert'
import Jarvis from '../Projects/Jarvis'
const Work = () => {
  return (
    <section className='relative h-auto w-screen flex flex-col items-center'>
      <h2 className='mt-[2rem] lg:m-0 w-fit relative z-[2] bg-[#0B111E] text-center text-[max(1rem,7vw)] min-[450px]:text-[max(2rem,5.5vw)] md:text-[max(2.6rem,5vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] text-[#43b0f1] border-[1.5px] rounded-lg border-solid border-[#057DCD] px-[0.5rem] py-[0.2rem] font-bold'>Latest Works</h2>
      <WorldAtlas />
      <SmoothScroll />
      <ToDo />
      <CurrencyConvert />
      {/* <Jarvis/>  */}
      <div className='hidden lg:block absolute top-0 bottom-0 z-[1] w-[0.1rem] bg-[#43b0f1] h-auto opacity-[.5]'></div>
    </section>
  )
}

export default Work