import { useRef } from 'react'
import { NavLink } from 'react-router'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import MatterCanvas from '../UI/Matter';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Resume from "../assets/Somy_Resume_Updated.pdf"
import { TextPlugin } from 'gsap/all';
const Home = () => {
  gsap.registerPlugin(TextPlugin);
  const ref = useRef()
  const roleRef=useRef()
   useGSAP(() => {
    // Name animation
    gsap.to(ref.current, {
      y: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    // Typing animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });

    tl.to(roleRef.current, {
      duration: 2,
      text: {
        value: "Web Developer",
        delimiter: "",
      },
      ease: "none",
    })
      .to(roleRef.current, {
        duration: 1,
        text: "",
        delay: 0.4,
      })
      .to(roleRef.current, {
        duration: 2.2,
        text: {
          value: "Frontend Developer",
          delimiter: "",
        },
        ease: "none",
      })
      .to(roleRef.current, {
        duration: 1,
        text: "",
        delay: 0.4,
      })
      .to(roleRef.current, {
        duration: 2,
        text: {
          value: "ReactJS Developer",
          delimiter: "",
        },
        ease: "none",
      })
      .to(roleRef.current, {
        duration: 1,
        text: "",
        delay: 0.4,
      });

    return () => tl.kill();
  }, []);
  return (
    <>

      <section className='lg:h-[87vh] lg:min-h-[450px] h-[80vh] min-[450px]:h-[90vh] min-h-[450px] min-[450px]:min-h-[600px] flex flex-col justify-center lg:inline-block w-screen bg-[#0B111E] relative '>
        <span className=' pointer-events-none relative z-[10] h-auto flex justify-between items-center text-[#d1dbe4a9] px-[2rem] lg:px-[5rem]'>
          <span className='h-auto w-fit mb-[2.5rem] mx-auto flex flex-col justify-around gap-[2rem] font-bold '>
            <span className='text-center '>
              <h5 className='text-[max(12px,4.8vw)] min-[450px]:text-[max(20px,4vw)] md:text-[max(27px,3.5vw)] lg:text-[clamp(1rem,0.541rem+0.7172vw,1.4375rem)] text-[#e8eef1]'>Hello, I'm</h5>
              <span className="relative h-auto w-auto overflow-hidden flex  ">
                <h2 ref={ref} className='inline-block text-[max(20px,8vw)] translate-y-[100%] transition-transform duration-[900ms] min-[450px]:text-[max(35px,7.5vw)] md:text-[max(45px,7vw)]  text-[#43b0f1] lg:text-[clamp(2.5rem,1.9754rem+0.8197vw,3rem)]'>Somyranjan Kumar</h2>
              </span>

              <h5 ref={roleRef} className=''></h5>
              <h5 className="text-[max(12px,4.8vw)] min-[450px]:text-[max(20px,4vw)] md:text-[max(27px,3.5vw)] lg:text-[clamp(1rem,0.541rem+0.7172vw,1.4375rem)] text-[#e8eef1]">
  <span ref={roleRef}></span>
  <span className="cursor text-[#43B0F1]">|</span>
</h5>
            </span>
            <span className='w-auto flex mx-auto gap-[1rem] pointer-events-auto'>
              <a className='text-[max(10px,4.4vw)] min-[450px]:text-[max(20px,3.7vw)] md:text-[max(25px,3.3vw)]  lg:text-[clamp(1rem,0.541rem+0.7172vw,1.4375rem)] w-[max(7.1rem,38vw)] max-w-[185px] min-[450px]:px-[1rem] md:px-[1.8rem] md:py-[.8rem] lg:py-[.6rem] lg:px-[1.1rem] min-[450px]:max-w-fit lg:w-fit lg:max-w-none relative cursor-pointer border-1 text-[#43b0f1] border-[#43b0f1] py-[0.6rem] rounded-xl overflow-hidden z-[1] before:z-[-1]  before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0  before:bg-[#43b0f1] before:scale-y-0 before:origin-top hover:before:scale-y-[1] hover:before:origin-bottom before:ease-in-out hover:text-[#0B111E] before:transition-transform before:duration-[350ms]' href={Resume} type='button' download>Download CV</a>
              <NavLink className="text-[max(10px,4.4vw)] min-[450px]:text-[max(20px,3.7vw)] md:text-[max(25px,3.3vw)] lg:text-[clamp(1rem,0.541rem+0.7172vw,1.4375rem)] bg-[#43b0f1] text-[#0B111E] md:py-[.8rem] py-[0.6rem] lg:py-[0.6rem] px-[max(1rem,6vw)] md:px-[1.8rem] lg:px-[1.5rem] rounded-xl" to="/about">About</NavLink>
            </span>
          </span>
          <span className='pointer-events-auto lg:translate-y-[10%] w-fit h-auto flex flex-col gap-[2rem] min-[450px]:gap-[2rem] opacity-[.7] text-[max(28px,11.5vw)] min-[450px]:text-[max(35px,6.5vw)] md:text-[max(45px,7vw)] lg:text-[40px]'>
<a href='https://www.linkedin.com/in/somyranjan-kumar-67b667260/' target='_blank'>
            <FaLinkedinIn title='Linkdin' className='cursor-pointer hover:text-[#0061b5] hover:scale-[1.16] transition-transform duration-[130ms] ease-in-out' />
</a>
            <FaInstagram title='Instagram' className='insta cursor-pointer hover:text-[#ee2a7b] hover:scale-[1.16] transition-transform duration-[130ms] ease-in-out' />
           <a href='mailto:somyranjank@gmail.com'>
            <CgMail title='Gmail' className='cursor-pointer hover:text-[#FBBC05] hover:scale-[1.16] transition-transform duration-[130ms] ease-in-out' />
           </a>
           <a target='_blank' href='https://github.com/somy275'>
            <IoLogoGithub title='Github' className='cursor-pointer hover:text-[white] hover:scale-[1.16] transition-transform duration-[130ms] ease-in-out' />
           </a>
           <a target='_blank' href='https://www.facebook.com/somyranjan.kumar/'>
            <FaFacebookSquare title='Facebook' className='cursor-pointer hover:text-[#1499F6] hover:scale-[1.16] transition-transform duration-[130ms] ease-in-out' />
           </a>
            <a target='_blank' href='https://api.whatsapp.com/send?phone=+917814779665&text=Hey there!'>
            <FaWhatsapp title='whatsapp' className='cursor-pointer hover:text-[#128C7E] hover:scale-[1.16] transition-transform duration-[130ms] ease-in-out' />
            </a>
          </span>
        </span>
      </section>
      <MatterCanvas />
    </>
  )
}

export default Home