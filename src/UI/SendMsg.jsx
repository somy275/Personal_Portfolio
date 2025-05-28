import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Bounce, ToastContainer } from 'react-toastify';
import { notifyOnError, notifyOnSuccess } from './Notifications';
import { onSendData } from './SendEmail';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
const SendMsg = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger)
    const inputText = useRef()
    useGSAP(() => {
        gsap.to(inputText.current, {
            x: 0,
            duration: 2,
            ease: "elastic.inOut",
            stagger: 0.2,
            scrub: 1,

        })
    }, {})
    const { register, handleSubmit, formState: { errors } } = useForm()
    const ref = useRef()
    const onSendmEmail = (data) => {
        if (window.navigator.onLine) {
            onSendData(data)
            setTimeout(() => {
                notifyOnSuccess("Message sent successfully")
                ref.current.reset()
            }, 200)
        }
        else {
            notifyOnError("Please connect to the internet")
        }

    }

    return (
        <div ref={inputText} className='translate-x-[400%] w-full min-[450px]:w-[max(20rem,65vw)] md:w-[max(25rem,60vw)] max-w-[280px] min-[450px]:max-w-[400px] md:max-w-[500px] lg:max-w-none lg:w-[40%] h-auto flex flex-col items-center text-[#e8eef1]'>
            <span className='text-[max(1rem,6vw)] min-[450px]:text-[max(1.6rem,5vw)] md:text-[max(2.2rem,3.9vw)] lg:text-[clamp(1.25rem,0.9877rem+0.4098vw,1.5rem)] font-bold'>Write me your message</span>
            <form ref={ref} onSubmit={handleSubmit(onSendmEmail)} className=' w-full flex flex-col justify-around gap-y-[3rem] py-[1.8rem]'>
                <div className='relative '>
                    <label htmlFor='name' className='absolute z-[2] top-[-25%] md:top-[-30%] lg:top-[-.75rem] left-[1.2rem] bg-[#0B111E] px-[.3rem] text-[#e8eef1c2] text-[max(.7rem,4vw)] min-[450px]:text-[max(1.1rem,3vw)] md:text-[max(1.4rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)]'>Name</label>
                    <input id='name' className='w-full text-[max(.8rem,4.8vw)] min-[450px]:text-[max(1.1rem,3vw)] md:text-[max(1.3rem,3vw)] lg:text-[16px] focus:outline-[#43b0f1] rounded-lg px-[1.5rem] py-[1rem] outline-2 outline-[#888B91]' placeholder='Enter your name' type='text' {...register('name', {
                        required: true
                    })} />
                    {errors.name && errors.name.type === "required" && (
                        notifyOnError("Name is required")
                    )}
                </div>
                <div className='relative'>
                    <label htmlFor='email' className='absolute z-[2] top-[-25%] md:top-[-30%] lg:top-[-.75rem] left-[1.2rem] bg-[#0B111E] px-[.3rem] text-[#e8eef1c2] text-[max(.7rem,4vw)] min-[450px]:text-[max(1.1rem,3vw)] md:text-[max(1.4rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)]'>Email</label>
                    <input id='email' className='w-full text-[max(.8rem,4.8vw)] min-[450px]:text-[max(1.1rem,3vw)] md:text-[max(1.3rem,3vw)] lg:text-[16px] focus:outline-[#43b0f1] rounded-lg px-[1.5rem] py-[1rem] outline-2 outline-[#888B91]' placeholder='Enter your email' type="email" {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })} />
                    {focus && errors.email && errors.email.type === "required" && (
                        notifyOnError("Email is required")
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        notifyOnError("Email is not valid")
                    )}
                </div>
                <div className='relative'>
                    <label htmlFor='msg' className='absolute z-[2] top-[-5%] md:top-[-5%] lg:top-[-.75rem] left-[1.2rem] bg-[#0B111E] px-[.3rem] text-[#e8eef1c2] text-[max(.7rem,4vw)] min-[450px]:text-[max(1.1rem,3vw)] md:text-[max(1.4rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)]'>Message</label>
                    <textarea id='message' cols="30" rows="10" className='w-full focus:outline-[#43b0f1] h-full resize-none ounded-lg px-[1.5rem] py-[1rem] text-[max(.8rem,4.8vw)] min-[450px]:text-[max(1.1rem,3vw)] md:text-[max(1.3rem,3vw)] lg:text-[16px] outline-2 outline-[#888B91] rounded-lg' placeholder='write your message' {...register('message', {
                        required: true
                    })} />
                    {errors.message && errors.message.type === "required" && (
                        notifyOnError("Message is required")
                    )}
                </div>
                <button className='relative cursor-pointer mx-auto bg-transparent border-2 border-solid border-[#43b0f1] text-[#43B0F1] text-[max(.8rem,4.8vw)] min-[450px]:text-[max(1.1rem,3vw)] md:text-[max(1.3rem,3vw)] lg:text-[16px] w-full py-[.7rem] rounded-lg font-bold z-[1]  before:z-[-1] before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0  before:bg-[#43b0f1] before:scale-y-0 before:origin-top hover:before:scale-y-[1] hover:before:origin-bottom before:ease-in-out hover:text-[#0B111E] before:transition-transform before:duration-[350ms]' type='submit'>Send Message</button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />

        </div>
    )
}

export default SendMsg