import React, { useRef } from 'react'
import { NavLink } from 'react-router'
import AboutImg from "../assets/About.png"
import { GiAchievement } from "react-icons/gi"
import { BsSuitcaseLg } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const About = () => {
  const ref = useRef()
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const intro = useRef()
  const btn = useRef()
  gsap.registerPlugin(useGSAP)
  useGSAP(() => {
    let tl = gsap.timeline()
    // tl.to(ref.current, {
    //   scale: 1,
    //   duration: 0.3,
    //   ease: "elastic.inOut",
    //   stagger: 0.1,
    //   scrub: 1
    // })
    tl.to(ref1.current, {
      opacity:1,
      duration: 0.3,
      ease: "power3.inOut",
      stagger: 0.1,
      scrub: 1
    })
    tl.to(ref2.current, {
      opacity:1,
      duration: 0.4,
      ease: "power3.inOut",
      stagger: 0.1,
      scrub: 1
    })
    tl.to(ref3.current, {
      opacity:1,
      duration: 0.3,
      ease: "power3.inOut",
      stagger: 0.1,
      scrub: 1
    })
    tl.to(intro.current, {
      y: 0,
      duration: 0.3,
      ease: "power3.inOut",
      stagger: 0.1,
      scrub: 1
    })
    tl.to(btn.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.inOut",
      stagger: 0.1,
      scrub: 1
    })
  }, {})
  return (
    <section className='relative h-auto lg:h-screen w-screen px-[2rem] lg:px-[5rem]'>
      <div className='absolute top-0 left-1/95 w-96 h-96  rounded-full blur-[100px] bg-[color-mix(in_oklab,#43b0f1_20%,transparent)] animate-pulse'></div>
      <div className='mt-[2rem] lg:mt-[max(2rem,6vh)] text-center text-[#43b0f1]'>
        <p className='text-[#e8eef1c2] text-[max(.8rem,4.3vw)] min-[450px]:text-[max(1.2rem,3.2vw)] md:text-[max(1.5rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)]'>My Intro</p>
        <h4 className='text-[max(1.5rem,7.8vw)] min-[450px]:text-[max(2rem,5.5vw)] md:text-[max(2.6rem,5vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] font-bold'>About Me</h4>
      </div>
      <div className='w-full h-full  flex flex-col items-center gap-y-[3rem] lg:gap-0 lg:items-start lg:flex-row py-[4rem] lg:pt-[max(4rem,8.5vh)] justify-between'>
        <span ref={ref} className='rotate-3 hover:rotate-0 w-fit lg:w-auto bg-[#C8C8D0] rounded-2xl overflow-hidden  duration-500 ease-in-out hover:rounded-2xl will-change-transform shadow-[0_0_30px_#43b1f1b1] '>
          <img className='h-auto w-[100%] max-w-[250px] max-h-[250px] min-[450px]:max-w-[300px] min-[450px]:max-h-[300px] md:max-w-[330px] md:max-h-[330px] lg:max-h-[400px] lg:max-w-[400px] lg:h-[max(19.5rem,25vw)] lg:w-[max(18rem,23vw)]  object-cover drop-shadow-[0px_5px_5px_rgba(0,0,0,0.7)] hover:scale-[1.1] transition-transform duration-500 ease-in-out' src={AboutImg} />
        </span>
        <span className='w-full max-w-[580px] min-[450px]:max-w-[640px] md:max-w-[700px] lg:max-w-[900px] lg:w-[64%] flex flex-col justify-around gap-y-[2rem] items-center'>
          <span className='w-full grid grid-cols-2 min-[450px]:grid-cols-3 gap-[1rem] md:gap-[1.2rem] lg:flex flex-wrap justify-around'>

            <span ref={ref1} className='opacity-0 rounded-2xl w-auto  lg:w-auto h-auto flex flex-col items-center gap-y-[0.3rem] bg-[hsl(219,32%,15%)] px-[2rem] lg:px-[max(3.3rem,3.5vw)] py-[max(1.1rem,.8vw)] hover:bg-[hsl(219,32%,12%)]'>
              <GiAchievement className='text-[max(1.4rem,6.7vw)] min-[450px]:text-[max(1.7rem,4.7vw)] md:text-[max(2.2rem,4vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] text-[#43b0f1]' />
              <h5 className='text-[#e8eef1] text-[max(.8rem,4vw)] min-[450px]:text-[max(1rem,3.2vw)] md:text-[max(1.5rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)] font-bold'>Experience</h5>
              <p className='text-[#e8eef1b1] text-[max(.6rem,2.8vw)] min-[450px]:text-[max(.8rem,2.1vw)] md:text-[max(1.1rem,2.1vw)]  lg:text-[clamp(0.625rem,0.2316rem+0.6148vw,1rem)]'>Fresher</p>
            </span>

            <span ref={ref2} className='opacity-0 rounded-2xl w-auto  lg:w-auto h-auto flex flex-col items-center gap-y-[0.3rem] bg-[hsl(219,32%,15%)] px-[2rem] lg:px-[max(3.3rem,3.5vw)] py-[max(1.1rem,.8vw)] hover:bg-[hsl(219,32%,12%)]'>
              <BsSuitcaseLg className='text-[max(1.4rem,6.7vw)] min-[450px]:text-[max(1.7rem,4.7vw)] md:text-[max(2.2rem,4vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] text-[#43b0f1]' />
              <h5 className='text-[#e8eef1] text-[max(.8rem,4vw)] min-[450px]:text-[max(1rem,3.2vw)] md:text-[max(1.5rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)] font-bold'>Completed</h5>
              <p className='text-[#e8eef1b1] text-[max(.6rem,2.8vw)] min-[450px]:text-[max(.8rem,2.1vw)] md:text-[max(1.1rem,2.1vw)]  lg:text-[clamp(0.625rem,0.2316rem+0.6148vw,1rem)]'>5+ projects</p>
            </span>

            <span ref={ref3} className='opacity-0 rounded-2xl w-auto  lg:w-auto h-auto flex flex-col items-center gap-y-[0.3rem] bg-[hsl(219,32%,15%)] px-[2rem] lg:px-[max(3.3rem,3.5vw)] py-[max(1.1rem,.8vw)] hover:bg-[hsl(219,32%,12%)]'>
              <BiSupport className='text-[max(1.4rem,6.7vw)] min-[450px]:text-[max(1.7rem,4.7vw)] md:text-[max(2.2rem,4vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] text-[#43b0f1]' />
              <h5 className='text-[#e8eef1] text-[max(.8rem,4vw)] min-[450px]:text-[max(1rem,3.2vw)] md:text-[max(1.5rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)] font-bold'>Support</h5>
              <p className='text-[#e8eef1b1] text-[max(.6rem,2.8vw)] min-[450px]:text-[max(.8rem,2.1vw)] md:text-[max(1.1rem,2.1vw)]  lg:text-[clamp(0.625rem,0.2316rem+0.6148vw,1rem)]'>Online 24/7</p>
            </span>
          </span>
        <span className='overflow-hidden'>
          <h5 ref={intro} className='translate-y-[100%] inline-block text-[#e8eef1b6] text-[max(1rem,4vw)] md:text-[max(1.8rem,3.5vw)] lg:text-[clamp(0.875rem,0.0225rem+1.332vw,1.6875rem)]'>
            As a passionate Web Developer, I specialize in creating dynamic, user-friendly web applications using HTML, CSS, JavaScript, TailwindCSS and ReactJS.
            Currently exploring Mern Stack development by building projects from frontend to backend and exploring new technologies.
I'm strengthening myself in technologies like JS, React JS, Node JS, Express JS, etc., so that I can build applications more effectively and provide seamless user experiences.
</h5></span>
          <NavLink ref={btn} className="scale-0 bg-[#43b0f1] text-[max(.9rem,4vw)] md:text-[max(1.6rem,3.3vw)] lg:text-[clamp(0.875rem,0.0225rem+1.332vw,1.6875rem)]  font-semibold text-[#0B111E] py-[max(.6rem,1.8vw)] lg:py-[max(.6rem,1vw)] px-[max(1.8rem,5.3vw)] lg:px-[max(1.8rem,2.5rem)] rounded-xl" to="/contact">Contact</NavLink>
        </span>
      </div>
    </section>
  )
}

export default About