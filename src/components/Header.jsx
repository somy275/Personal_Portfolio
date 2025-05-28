import React from 'react'
import { NavLink } from 'react-router'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa"
import { GrContact } from "react-icons/gr";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa"
const Header = () => {
  return (
    <header className='w-auto h-auto relative z-20'>
      <nav className='px-[2rem] md:px-[3rem] lg:px-[5rem] relative w-screen h-auto text-[#43b0f1] flex justify-between items-center py-[1.5rem] lg:py-[1rem]'>
        <NavLink to="/">
          <span className='w-[20%] text-[max(25px,7vw)] min-[450px]:text-[max(30px,5.3vw)] md:text-[max(37px,5vw)] lg:text-[clamp(1.5625rem,1.0379rem+0.8197vw,2.0625rem)] font-bold'>Portfolio</span>
        </NavLink>
        <span className='text-[#e8eef1]  px-[1.7rem] fixed left-0 right-0 top-[85%] mx-auto w-[80%] max-w-[350px] min-[450px]:max-w-[380px] md:max-w-[420px] lg:max-w-none lg:w-[28%] rounded-4xl md:rounded-[40px] py-[0.8rem] lg:py-[max(.8rem,1vw)] min-[450px]:py-[1.2rem] bg-[hsla(219,32%,16%,0.8)] backdrop-blur-4xl text-[max(15px,5.1vw)] min-[450px]:text-[max(22px,3.5vw)] md:text-[max(25px,3.5vw)] lg:text-[clamp(1.25rem,0.9877rem+0.4098vw,1.5rem)]  flex items-center justify-around'>
          <NavLink style={({ isActive }) => {
            return {
              background: isActive ? "linear-gradient(30deg, #194a7a, #2395e0, #d1dbe4)" : "",
              boxShadow: isActive ? "0 0 16px 5px #194a7a " : ""
            }
          }}
            className=" shadow-2xl shadow-amber-500  p-[0.5rem] rounded-4xl" to="/">
            <FaHome />
          </NavLink>

          <NavLink style={({ isActive }) => {
            return {
              background: isActive ? "linear-gradient(30deg, #194a7a, #2395e0, #d1dbe4)" : "",
              boxShadow: isActive ? "0 0 16px 5px #194a7a " : ""
            }
          }} className=" p-[0.5rem] rounded-4xl" to="/about">
            <FaRegUser />
          </NavLink>

          <NavLink style={({ isActive }) => {
            return {
              background: isActive ? "linear-gradient(30deg, #194a7a, #2395e0, #d1dbe4)" : "",
              boxShadow: isActive ? "0 0 16px 5px #194a7a " : ""
            }
          }} className=" p-[0.5rem] rounded-4xl" to="/skills">
            <RiBook2Line />
          </NavLink>

          <NavLink style={({ isActive }) => {
            return {
              background: isActive ? "linear-gradient(30deg, #194a7a, #2395e0, #d1dbe4)" : "",
              boxShadow: isActive ? "0 0 16px 5px #194a7a " : ""
            }
          }} className=" p-[0.5rem] rounded-4xl" to="/work">
            <MdOutlineHomeRepairService />
          </NavLink>
          <NavLink style={({ isActive }) => {
            return {
              background: isActive ? "linear-gradient(30deg, #194a7a, #2395e0, #d1dbe4)" : "",
              boxShadow: isActive ? "0 0 16px 5px #194a7a " : ""
            }
          }} className=" p-[0.5rem] rounded-4xl" to="/contact">
            <GrContact />
          </NavLink>
        </span>
        <NavLink to="https://t.me/Somy_123" target='_blank' className='w-fit text-[max(25px,7vw)] min-[450px]:text-[max(30px,5.3vw)] md:text-[max(37px,5vw)] lg:text-[clamp(1.8125rem,1.2223rem+0.9221vw,2.375rem)] font-bold '>
          <FaTelegramPlane />
        </NavLink>

      </nav>
    </header>
  )
}

export default Header