import React, { useRef } from 'react'
import { CgMail } from "react-icons/cg";
import { IoTriangleOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaSms } from "react-icons/fa";
import SendMsg from '../UI/SendMsg';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
const Contact = () => {
  const ref = useRef()
  
  gsap.registerPlugin(useGSAP, ScrollTrigger)

  useGSAP(() => {
    let tl = gsap.timeline()
    ref.current.childNodes.forEach((ele, idx) => {
      gsap.set(ref.current.childNodes[idx], {
        x: -700,

      })
      tl.to(ref.current.childNodes[idx], {
        x: 0,
        duration: 0.6,
        ease: "elastic.inOut",
        stagger: 0.2,
        scrub: 1,

      })
    }

    )

  }, {})
  return (
    <section className='h-auto w-screen flex flex-col items-center'>
      <div className='mt-[2rem] text-center text-[#43b0f1]'>
        <p className='text-[#e8eef1c2] text-[max(.8rem,4.3vw)] min-[450px]:text-[max(1.2rem,3.2vw)] md:text-[max(1.5rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)]'>Get in touch</p>
        <h4 className='text-[max(1.5rem,7.8vw)] min-[450px]:text-[max(2rem,5.5vw)] md:text-[max(2.6rem,5vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] font-bold'>Contact Me</h4>
      </div>
      <div className='flex flex-col items-center gap-[10rem] lg:flex-row lg:items-start justify-between h-auto w-screen px-[2rem] lg:px-[5rem] py-[5rem] lg:py-[3rem]'>
        <div ref={ref} className='w-full min-[450px]:w-[max(20rem,65vw)] md:w-[max(25rem,50vw)] max-w-[300px] min-[450px]:max-w-[400px] md:max-w-[450px] lg:max-w-none lg:w-[40%] h-auto flex flex-col items-center text-[#e8eef1]'>
          <span className='text-[max(1rem,6vw)] min-[450px]:text-[max(1.6rem,5vw)] md:text-[max(2.2rem,3.9vw)] lg:text-[clamp(1.25rem,0.9877rem+0.4098vw,1.5rem)] font-bold'>Talk to me</span>
          <div className='w-full flex flex-col items-center bg-[#1A2332] mt-[1.5rem]  py-[1.8rem] rounded-2xl text-[max(.7rem,4.2vw)] min-[450px]:text-[max(1.2rem,3.8vw)] md:text-[max(1.8rem,3.5vw)] lg:text-[clamp(0.9375rem,0.5441rem+0.6148vw,1.3125rem)] font-semibold'>
            <CgMail className='text-[max(1.7rem,9vw)] min-[450px]:text-[max(2.5rem,8vw)] md:text-[max(3.6rem,7.3vw)] lg:text-[clamp(1.875rem,1.125rem+1.2vw,2.625rem)]' />
            <h5 className='font-bold mt-[.3rem]'>Email</h5>
            <p className='text-[#e8eef18f] font-semibold'>somyranjank@gmail.com</p>
            <a href='mailto:somyranjank@gmail.com' target='_blank' className='send relative flex items-center mt-[.6rem] text-[#43b0f1] '>Write me
              <IoTriangleOutline className='ml-[.5rem] rotate-[90deg] icon transition-[transform_3s_cubic-bezier(0.5,0,0,1)]' />
            </a>
          </div>
          <div className='w-full flex flex-col items-center bg-[#1A2332] mt-[1.5rem]  py-[1.8rem] rounded-2xl text-[max(.7rem,4.2vw)] min-[450px]:text-[max(1.2rem,3.8vw)] md:text-[max(1.8rem,3.5vw)] lg:text-[clamp(0.9375rem,0.5441rem+0.6148vw,1.3125rem)] font-semibold'>
            <FaWhatsapp className='text-[max(1.7rem,9vw)] min-[450px]:text-[max(2.5rem,8vw)] md:text-[max(3.6rem,7.3vw)] lg:text-[clamp(1.875rem,1.125rem+1.2vw,2.625rem)]' />
            <h5 className='font-bold mt-[.4rem]'>Whatsapp</h5>
            <p className='text-[#e8eef18f] font-semibold'>7814779665</p>
            <a href='https://api.whatsapp.com/send?phone=+917814779665&text=Hey there!' target='_blank' className='send relative flex items-center mt-[.6rem] text-[#43b0f1] '>Write me
              <IoTriangleOutline className='ml-[.5rem] rotate-[90deg] icon transition-[transform_3s_cubic-bezier(0.5,0,0,1)]' />
            </a>
          </div>
          <div className='w-full flex flex-col items-center bg-[#1A2332] mt-[1.5rem]  py-[1.8rem] rounded-2xl text-[max(.7rem,4.2vw)] min-[450px]:text-[max(1.2rem,3.8vw)] md:text-[max(1.8rem,3.5vw)] lg:text-[clamp(0.9375rem,0.5441rem+0.6148vw,1.3125rem)] font-semibold'>
            <FaSms className='text-[max(1.7rem,9vw)] min-[450px]:text-[max(2.5rem,8vw)] md:text-[max(3.6rem,7.3vw)] lg:text-[clamp(1.875rem,1.125rem+1.2vw,2.625rem)]' />
            <h5 className='font-bold mt-[.4rem]'>SMS</h5>
            <p className='text-[#e8eef18f] font-semibold'>7814779665</p>
            <a href='sms:+917814779665' target='_blank' className='send relative flex items-center mt-[.6rem] text-[#43b0f1] '>Write me
              <IoTriangleOutline className='ml-[.5rem] rotate-[90deg] icon transition-[transform_3s_cubic-bezier(0.5,0,0,1)]' />
            </a>
          </div>
        </div>
        <SendMsg />

      </div>
    </section>
  )
}

export default Contact