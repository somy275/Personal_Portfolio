import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoTwitter } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='relative z-[10]  h-auto w-screen py-[1.2rem]  bg-[#057dcd] '>

      <div className='flex flex-col gap-y-[1rem] lg:flex-row items-center justify-between px-[2rem] lg:px-[3rem] '>
        <span className='w-full lg:w-[60%]'>
          <p className='text-center lg:text-left text-[max(12px,4.6vw)] min-[450px]:text-[max(20px,3.5vw)] md:text-[max(27px,3vw)] lg:text-[16px]'>
            Copyright &copy; 2025 Somyranjan. All rights reserved.
          </p>
        </span>
        <span className='w-full lg:w-[30%] flex justify-around text-[max(20px,6vw)] min-[450px]:text-[max(25px,4.5vw)] md:text-[max(32px,4.5vw)] lg:text-[clamp(1.5rem,1.1066rem+0.6148vw,1.875rem)]'>
          <FaLinkedinIn />
          <BiLogoTwitter />
          <FaInstagram />
          <CgMail />
          <IoLogoGithub />
          <FaFacebookSquare />
        </span>
      </div>

    </footer>
  )
}

export default Footer