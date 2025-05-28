import React from 'react'
import skills from "../assets/Skills.svg"
import Html from "../assets/Html.webp"
import Css from "../assets/Css.webp"
import Js from "../assets/Js.png"
import tailwind from "../assets/Tailwind.webp"
import ReactImg from "../assets/react.png"
import Redux from "../assets/Redux.png"
import Git from "../assets/Git.webp"
import Github from "../assets/Github.webp"
import Api from "../assets/Api.webp"
import Responsive from "../assets/Responsive.webp"
const Skills = () => {
  return (
    <section className='h-auto w-screen flex flex-col items-center px-[2rem] lg:px-[5rem]'>
      <div className='mt-[2rem] text-center '>
        <p className='text-[#e8eef1a0] text-[max(.8rem,4.3vw)] min-[450px]:text-[max(1.2rem,3.2vw)] md:text-[max(1.5rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)]'>My Abilities</p>
        <h5 className='font-bold text-[#43b0f1] text-[max(1.5rem,7.8vw)] min-[450px]:text-[max(2rem,5.5vw)] md:text-[max(2.6rem,5vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)]'>My Experience</h5>
      </div>
      <div className='w-full h-auto flex flex-wrap items-center justify-center gap-y-[6rem] lg:justify-between py-[5rem]'>
        <span className='w-auto min-[450px]:w-auto min-[450px]:max-w-[620px] md:max-w-[780px] md:w-[90%] lg:w-auto h-auto py-[2rem] flex flex-col justify-around items-center  bg-[hsl(219,32%,15%)] rounded-2xl'>
          <h5 className='text-[#43b0f1] text-center pb-[4rem] md:pb-[5rem] lg:pb-[3rem] text-[max(1.5rem,7.8vw)] min-[450px]:text-[max(2rem,5.5vw)] md:text-[max(2.6rem,5vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] font-bold'>Fronted Development</h5>
          <span className='w-full h-auto flex flex-wrap justify-around md:grid grid-cols-3 gap-[3rem] min-[450px]:gap-[3.5rem] lg:gap-y-[2rem] place-items-center px-[1rem]'>
            <span className='relative flex flex-col items-center w-auto h-auto group'>
              <span className=' lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-38%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-38%] lg:top-[-20%]  text-[#e8eef1] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-auto px-[max(1.8rem,8vw)] min-[450px]:px-[max(2.3rem,5.8vw)] md:px-[max(2.8rem,5vw)] lg:px-[max(2rem,2vw)] py-[0.3rem] rounded-4xl bg-[#EB5700] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#EB5700] after:rotate-45 after:bottom-[-0.3rem] '>Html</span>
              <img className=' w-auto h-[max(4rem,20vw)] min-[450px]:h-[max(5.7rem,15vw)] md:h-[max(7rem,12.3vw)] lg:h-[max(5rem,6.3vw)] lg:max-h-[105px] object-cover' src={Html} />
            </span>
            <span className='relative w-auto h-auto group flex flex-col items-center'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-58%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-58%] lg:top-[-20%]  text-[#e8eef1] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-auto px-[max(2rem,8.3vw)] min-[450px]:px-[max(2.5rem,6vw)] md:px-[max(3rem,5.3vw)] lg:px-[max(2.2rem,2.2vw)] py-[0.3rem] rounded-4xl bg-[#2449D9] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#2449D9] after:rotate-45 after:bottom-[-0.3rem] '>CSS</span>
              <img className=' w-auto h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.3rem,5.5vw)] lg:max-h-[92px] object-cover' src={Css} />
            </span>
            <span className='relative w-auto h-auto group flex flex-col items-center'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-28%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-28%] lg:top-[-10%]  text-[#0B111E] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-auto px-[max(1.5rem,7.7vw)] min-[450px]:px-[max(1.7rem,4vw)] md:px-[max(2rem,4vw)] lg:px-[max(1.4rem,1.8vw)] py-[0.3rem] rounded-4xl bg-[#F1C020] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#F1C020] after:rotate-45 after:bottom-[-0.3rem] '>Javascript</span>
              <img className=' w-auto h-[max(4.7rem,23vw)] min-[450px]:h-[max(6.4rem,17.3vw)] md:h-[max(8.5rem,14vw)] lg:h-[max(5.7rem,7.5vw)] lg:max-h-[128px] object-cover' src={Js} />
            </span>

            <span className='relative w-auto h-auto group flex flex-col items-center'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-88%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-100%] lg:top-[-20%] w-auto text-[#0B111E] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  px-[max(1.1rem,7.3vw)] min-[450px]:px-[max(1rem,2vw)] md:px-[max(1.5rem,3.5vw)] lg:px-[max(1rem,1.4vw)] py-[0.3rem] rounded-4xl bg-[#14C0B8] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#14C0B8] after:rotate-45 after:bottom-[-0.3rem] '>TailwindCSS</span>
              <img className=' w-auto h-[max(2.5rem,11vw)] min-[450px]:h-[max(2.8rem,8vw)] md:h-[max(3.7rem,6.5vw)] lg:h-[max(2.8rem,3.5vw)] lg:max-h-[60px] object-cover' src={tailwind} />
            </span>
            <span className='relative w-auto h-auto group flex flex-col items-center'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-28%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-28%] lg:top-[-10%] w-auto text-[#0B111E] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  px-[max(1.5rem,7.7vw)] min-[450px]:px-[max(2rem,3.7vw)] md:px-[max(2rem,4vw)] lg:px-[max(1.4rem,1.8vw)] py-[0.3rem] rounded-4xl bg-[#39BED5] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#39BED5] after:rotate-45 after:bottom-[-0.3rem] '>React.JS</span>
              <img className=' w-auto h-[max(4.5rem,20.5vw)] min-[450px]:h-[max(6rem,15.5vw)] md:h-[max(7.3rem,12.7vw)] lg:lg:h-[max(5.3rem,6.7vw)] lg:max-h-[120px] object-cover' src={ReactImg} />
            </span>
            <span className='relative w-auto h-auto group flex flex-col items-center'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-58%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-58%] lg:top-[-20%] w-auto text-[#e8eef1] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  px-[max(2rem,8.1vw)] min-[450px]:px-[max(2.2rem,5vw)] md:px-[max(2.5rem,4.7vw)] lg:px-[max(1.8rem,2vw)] py-[0.3rem] rounded-4xl bg-[#754DB8] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#754DB8] after:rotate-45 after:bottom-[-0.3rem] '>Redux</span>
              <img className=' w-auto h-[max(3.3rem,15.7vw)] min-[450px]:h-[max(4.5rem,12vw)] md:h-[max(6rem,10vw)] lg:h-[max(4rem,5.2vw)] lg:max-h-[95px] object-cover' src={Redux} />
            </span>
            <span className='relative ml-[1rem] w-auto h-auto group flex flex-col items-center md:col-[2] mt-[1rem] md:mt-[1.8rem] lg:mt-[1rem]'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-58%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-58%] lg:top-[-20%] w-[max(7.7rem,40vw)] min-[450px]:w-[max(10rem,30vw)] md:w-[max(14rem,28vw)] lg:w-[max(9rem,13.1vw)] max-w-[170px] min-[450px]:max-w-[220px] md:max-w-[260px] lg:max-w-[230px] text-[#000] font-semibold flex flex-col items-center visible lg:invisible  lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  lg:px-[max(1rem,1.4vw)] py-[0.3rem] rounded-4xl bg-[#B0B0B0] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#B0B0B0] after:rotate-45 after:bottom-[-0.3rem] '>Responsive design</span>
              <img className=' w-auto h-[max(3.3rem,15.7vw)] min-[450px]:h-[max(4.5rem,12vw)] md:h-[max(6rem,10vw)] lg:h-[max(4rem,5.2vw)] lg:max-h-[95px] object-cover' src={Responsive} />
            </span>
          </span>
        </span>

        <span className='w-auto min-[450px]:w-[90%] min-[450px]:max-w-[620px] md:max-w-[780px] md:w-[90%] lg:max-w-none lg:w-auto h-auto py-[2rem] min-[450px]:px-[1.5rem] lg:px-0 flex flex-col justify-around items-center  bg-[hsl(219,32%,15%)] rounded-2xl'>
          <h5 className='text-[#43b0f1] text-center pb-[4.5rem] md:pb-[5.5rem] lg:pb-[3rem] text-[max(1.5rem,7.8vw)] min-[450px]:text-[max(2rem,5.5vw)] md:text-[max(2.6rem,5vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)] font-bold'>Tools and Technologies</h5>
          <span className='w-full h-auto flex flex-wrap justify-around md:grid grid-cols-3 gap-[3rem] min-[450px]:gap-[3.5rem] lg:gap-y-[2rem] place-items-center '>
            <span className='relative w-auto h-auto group flex flex-col items-center'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-58%] absolute top-[-60%] lg:top-[-20%] w-auto text-[#e8eef1] font-semibold flex flex-col items-center visible text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  px-[max(1.7rem,8vw)] min-[450px]:px-[max(2.2rem,5.8vw)] md:px-[max(3rem,5.3vw)] lg:px-[max(2.2rem,2.2vw)] py-[0.3rem] rounded-4xl bg-[#F34F29] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#F34F29] after:rotate-45 after:bottom-[-0.3rem] '>Git</span>
              <img className=' w-auto h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.3rem,5.5vw)] lg:max-h-[92px] object-cover' src={Git} />
            </span>
            <span className='relative w-auto h-auto group flex flex-col items-center'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-58%] absolute top-[-58%] lg:top-[-20%] w-auto text-[#e8eef1] font-semibold flex flex-col items-center visible text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  px-[max(1.7rem,8vw)] min-[450px]:px-[max(2rem,5.5vw)] md:px-[max(3rem,5.3vw)] lg:px-[max(2.2rem,2.2vw)] py-[0.3rem] rounded-4xl bg-[#000000] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#000000] after:rotate-45 after:bottom-[-0.3rem] '>Github</span>
              <img className=' w-auto h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.3rem,5.5vw)] lg:max-h-[92px] object-cover' src={Github} />
            </span>
            <span className='relative w-auto h-auto group flex flex-col items-center'>
              <span className='lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-48%] absolute top-[-42%] lg:top-[-20%]  text-[#000] font-semibold flex flex-col items-center visible text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-[max(7rem,32vw)] min-[450px]:w-[max(9rem,25vw)] md:w-[max(12rem,22vw)] lg:w-[max(8rem,10vw)] max-w-[145px] min-[450px]:max-w-[190px] md:max-w-[225px] lg:max-w-[200px]  py-[0.3rem] rounded-4xl bg-[#73D5E8] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#73D5E8] after:rotate-45 after:bottom-[-0.3rem] '>Api integration</span>
              <img className=' w-auto h-[max(4rem,20vw)] min-[450px]:h-[max(5.7rem,15vw)] md:h-[max(7rem,12.3vw)] lg:h-[max(5rem,6.3vw)] lg:max-h-[105px] object-cover' src={Api} />
            </span>
          </span>
        </span>
        <span className='w-screen flex justify-center h-auto '>
          <img className='flex h-[max(5rem,65vw)] min-[450px]:h-[max(19rem,55vw)]  md:h-[30rem] lg:h-[max(30rem,35vw)] lg:max-h-[650px] w-auto object-cover' src={skills} />
        </span>
      </div>

    </section>
  )
}

export default Skills