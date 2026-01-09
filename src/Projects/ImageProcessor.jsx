import React from 'react'
import { GoLinkExternal } from 'react-icons/go'
import ImageProcess from "../assets/ImageProcessor.webp"
import Macbook from "../assets/macbook.png"
const ImageProcessor = () => {
      const skills = ["ReactJS","Tailwind CSS","Redux toolkit","Axios","Node JS","Express JS","Sharp JS","Archiever JS","Server Side Events(SSE)"]
  return (
    <div className='w-full h-fit lg:h-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[3rem] lg:gap-[11rem] mt-[max(4rem,28vw)] min-[450px]:mt-[max(6rem,21vw)] md:mt-[12rem] lg:mt-[3rem] px-[2rem] lg:px-[4rem] pb-[5rem]'>
               <div className='flex w-auto min-[450px]:w-[100%] max-w-[400px] min-[450px]:max-w-[600px] lg:w-auto lg:max-w-[max(400px,30vw)] h-fit relative group'>
                   <a href="https://somyimageprocessor.netlify.app/" target='_blank' className='flex  justify-center w-auto h-auto lg:h-[max(16rem,19vw)]  items-end z-[2] relative hover:scale-[1.15]  duration-[270ms] ease-in-out  '>
                       <img src={ImageProcess} alt="Smooth Scrolling" className=' aspect-[1/.645] w-auto object-cover absolute top-[1.5vw] lg:top-[14.1%] right-[9vw] md:right-[4rem] lg:right-[10.5%] z-[1] h-[90%] lg:h-[80%]' />
                       <img draggable="false" src={Macbook} alt="Macbook" className='w-auto  relative z-[1] h-fit object-cover drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] ' />
                       <span className=' lg:group-hover:top-[-1.8rem] absolute top-[-15vw] min-[450px]:top-[-27%] lg:top-[20%] text-[#0B111E] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] font-semibold flex items-center justify-around  shadow-[0_5px_10px_rgba(0,0,0,0.3)] transition-[top_0.3s_cubic-bezier(0.68,-0.55,0.265,1.55)]  w-auto px-[1rem] py-[0.4rem] rounded-lg bg-[#F8F5F9] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#F8F5F9] after:rotate-45 after:bottom-[-0.3rem] after:right-[45%]  '>Smooth Scrolling
                           <GoLinkExternal className='w-auto h-auto ml-[.3rem] ' />
                       </span>
                   </a>
               </div>
               <span className='w-full md:pl-[1rem] lg:p-0 lg:max-w-[46%] flex flex-col items-start gap-[1rem] text-[#F8F5F9]'>
                   <span>
                       <h1 className='text-[max(1.6rem,7.2vw)] min-[450px]:text-[max(2rem,6.5vw)] md:text-[max(3rem,5.5vw)] lg:text-[clamp(1.875rem,1.2193rem+1.0246vw,2.5rem)] font-bold'>Image Processor</h1>
                       <h3 className='text-[max(1rem,4vw)] min-[450px]:text-[max(1.1rem,3.7vw)] md:text-[max(1.7rem,3.2vw)] lg:text-[clamp(1.0625rem,0.5379rem+0.8197vw,1.5625rem)]'>(Productivity tool)</h3>
                   </span>
                   <p className='text-[#E8EEF1] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.5rem,3vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)]'>

Image Processor is an image processing web where user can convert images to another format, resize images with maintaining aspect ratio, compress images, create PDFs and also user can manage PDF settings according to their requirements and can add watermarks on images where watermark can be text or logo.</p>
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
               <span className='hidden absolute right-[21.3%] min-[1350px]:right-[21.5%] lg:flex lg:flex-row-reverse items-center h-auto'>
                   <div className='relative bg-[#D7D2CC] w-[28vw] h-[0.07rem]'>
                   </div>
                   <a href="https://somyimageprocessor.netlify.app/" target='_blank' className='w-[1rem] h-[1rem] bg-[#0B111E] relative z-[2] rounded-4xl border-[3px] border-solid border-[#D7D2CC] hover:scale-[1.2] transition-transform duration-[170ms] ease-in-out'></a>
               </span>
           </div>
  )
}

export default ImageProcessor