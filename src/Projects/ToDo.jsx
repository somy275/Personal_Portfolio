import React from 'react'
import iphone from "../assets/ipad.png"
import { GoLinkExternal } from "react-icons/go";
const ToDo = () => {
    const skills = ["Html", "CSS", "TailwindCSS", "React.JS", "Redux"]
    return (
        <div className='w-full h-fit lg:h-auto flex flex-col lg:flex-row items-center justify-between gap-[3rem] lg:gap-[11rem] mt-[max(4rem,28vw)] min-[450px]:mt-[max(6rem,21vw)] md:mt-[13rem] lg:mt-[4rem] px-[2rem] lg:px-[4rem] pb-[5rem]'>
            <div className='flex max-w-[400px] min-[450px]:max-w-fit lg:max-w-[400px] w-auto  h-fit relative group'>
                <a href="https://smoothscrollingwithsomy.netlify.app/" target='_blank' className='flex  justify-center w-auto h-auto lg:h-[27rem] lg:max-h-[450px]  items-end z-[2] relative hover:scale-[1.15]  duration-[270ms] ease-in-out '>
                    <img src="/src/assets/Todo.webp" alt="Smooth Scrolling" className='aspect-[.7/1] w-fit  object-cover absolute z-[1] h-full lg:h-[92.7%]  ' />
                    <img draggable="false" src={iphone} alt="Macbook" className='w-auto  relative z-[1] h-[max(8rem,69vw)] min-[450px]:h-[max(19rem,63vw)] md:h-[max(30rem,59vw)] max-h-[300px] min-[450px]:max-h-[450px] md:max-h-[550px] lg:max-h-[400px] object-cover drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]' />
                    <span className='lg:group-hover:top-[-2rem] absolute top-[-15vw] min-[450px]:top-[-27%] md:top-[-19%] lg:top-[20%] text-[#0B111E] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] font-semibold flex items-center justify-around  shadow-[0_5px_10px_rgba(0,0,0,0.3)] transition-[top_0.3s_cubic-bezier(0.68,-0.55,0.265,1.55)]  w-auto px-[1rem] py-[0.4rem] rounded-lg bg-[#f73842ec] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#f73842ec] after:rotate-45 after:bottom-[-0.3rem] after:right-[45%] '>ToDo App
                        <GoLinkExternal className='w-auto h-auto ml-[.3rem] ' />
                    </span>
                </a>
            </div>
            <span className='w-full md:pl-[1rem] lg:p-0 lg:max-w-[45%] flex flex-col items-start gap-[1rem] text-[#f73842ec]'>
                <span>
                    <h1 className='text-[max(1.6rem,7.2vw)] min-[450px]:text-[max(2rem,6.5vw)] md:text-[max(3rem,5.5vw)] lg:text-[clamp(1.875rem,1.2193rem+1.0246vw,2.5rem)] font-bold'>ToDo app</h1>
                    <h3 className='text-[max(1rem,4vw)] min-[450px]:text-[max(1.1rem,3.7vw)] md:text-[max(1.7rem,3.2vw)] lg:text-[clamp(1.0625rem,0.5379rem+0.8197vw,1.5625rem)]'>(Productivity or task management tool)</h3>
                </span>
                <p className='text-[#E8EEF1] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.5rem,3vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)]'>The To-Do App is a minimal, user-friendly task manager designed to help you stay on top of your daily goals. Whether you're planning your day, managing a project, or just keeping track of groceries, this app makes it easy to create, update, and complete tasks.</p>
                <ul className='text-[#E8EEF1] w-full flex flex-wrap gap-y-[.7rem] gap-x-[0.6rem]'>
                    {
                        skills.map((data) => {
                            return (
                                <li className='border-1 border-solid border-[#43B0F1] px-[.7rem] py-[.2rem] text-[max(.6rem,3vw)] min-[450px]:text-[max(.8rem,2.7vw)] md:text-[max(1.2rem,2.1vw)] lg:text-[clamp(0.75rem,0.4221rem+0.5123vw,1.0625rem)] rounded-3xl'>
                                    {data}
                                </li>
                            )
                        })
                    }
                </ul>
            </span>
            <span className='hidden absolute left-[21.35%] min-[1350px]:left-[21.6%]  lg:flex items-center h-auto'>
                <div className='relative bg-[#f73842ec] w-[28vw] h-[0.07rem]'>
                </div>
                <a href="https://smoothscrollingwithsomy.netlify.app/" target='_blank' className='w-[1rem] h-[1rem] bg-[#0B111E] relative z-[2] rounded-4xl border-[3px] border-solid border-[#f73842ec] hover:scale-[1.2] transition-transform duration-[170ms] ease-in-out'></a>
            </span>
        </div>
    )
}

export default ToDo