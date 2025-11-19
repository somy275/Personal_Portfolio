import React from "react";
import Html from "../assets/Html.webp";
import Css from "../assets/Css.webp";
import Js from "../assets/Js.png";
import tailwind from "../assets/Tailwind.webp";
import ReactImg from "../assets/react.png";
import Redux from "../assets/Redux.png";
import Responsive from "../assets/Responsive.webp";
function Frontend() {                           
  return (
    <span className=" min-[450px]:w-auto min-[450px]:max-w-[620px] md:max-w-[780px] md:w-[90%]  h-auto   flex flex-col justify-around items-center ">
      <h5 className="relative text-[#43b0f1] text-center pb-[4rem] md:pb-[5rem] lg:pb-[3rem] text-[max(1.8rem,8vw)] min-[450px]:text-[max(2.3rem,5.8vw)] md:text-[max(2.8rem,5.3vw)] lg:text-[clamp(1.4375rem,1.1596rem+0.5123vw,1.75rem)] font-bold overflow-hidden after:absolute after:top-0 after:bottom-[55%] after:left-0 after:right-0 after:border-b-[.22rem] after:border-solid after:border-b-[#43b0f1]">
        Frontend Development
      </h5>
      <span className="w-screen h-auto flex flex-wrap justify-around lg:grid lg:grid-cols-4 gap-[3rem] min-[450px]:gap-[3.5rem]  lg:gap-y-[2rem] place-items-center px-[1rem]">
        <div className="relative   flex justify-center group">
          <span className="relative overflow-hidden z-10 bg-[hsl(219,32%,15%)] rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
            {/* Rotating border gradient */}
            {/* Rotating border gradient */}
            <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.4s_linear_infinite] ">
              <span class="absolute inset-0   rounded-3xl bg-gradient-to-r from-[#FFFFFF] via-[#EB5700] to-[#FFFFFF]"></span>
            </span>

            {/* Solid background to hide center of rotating border */}
            <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
            {/* Icon container */}

            <div className="h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[100px]">
              <img
                src={Html}
                alt="HTML"
                className="w-full h-full object-contain" />
            </div>
          </span>
          {/* Tooltip label */}
          <span className="z-[20] lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-5%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-5%] md:top-[-13%] lg:top-[15%]  text-[#e8eef1] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-auto px-[max(1.8rem,8vw)] min-[450px]:px-[max(2.3rem,5.8vw)] md:px-[max(2.8rem,5vw)] lg:px-[max(2rem,2vw)] py-[0.3rem] rounded-4xl bg-[#EB5700] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#EB5700] after:rotate-45 after:bottom-[-0.3rem] ">
            Html
          </span>
        </div>
        <div className="relative flex justify-center group">
          <span className="relative z-10 overflow-hidden  bg-[hsl(219,32%,15%)] rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
            {/* Rotating border gradient */}
            {/* Rotating border gradient */}
            <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.7s_linear_infinite]">
              <span class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#EBEBEB] via-[#264CE2] to-[#EBEBEB]"></span>
            </span>
            {/* Solid background to hide center of rotating border */}
            <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
            {/* Tooltip label */}

            {/* Icon container */}
            <div className=" h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[100px]">
              <img
                src={Css}
                alt="..."
                className=" w-full h-full object-contain" />
            </div>
          </span>
          <span className="z-[20] lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-11%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-11%] md:top-[-19%] lg:top-[15%] text-[#e8eef1] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-auto px-[max(2rem,8.3vw)] min-[450px]:px-[max(2.5rem,6vw)] md:px-[max(3rem,5.3vw)] lg:px-[max(2.2rem,2.2vw)] py-[0.3rem] rounded-full bg-[#2449D9] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#2449D9] after:rotate-45 after:bottom-[-0.3rem]">
            CSS
          </span>
        </div>
        <div className="relative flex justify-center group">
          <span className="relative z-10 overflow-hidden  bg-[hsl(219,32%,15%)] rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
            {/* Rotating border gradient */}
            {/* Rotating border gradient */}
            <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.7s_linear_infinite]">
            <span class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFFFFF] via-[#E09F28] to-[#FFFFFF]"></span>
            </span>
            {/* Solid background to hide center of rotating border */}
            <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
            {/* Icon container */}
            <div className=" h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[100px]">
              <img
                src={Js}
                alt="..."
                className=" w-full h-full object-contain" />
            </div>
          </span>
          <span className="z-20 lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-3%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-3%] md:top-[-11%] lg:top-[15%]  text-[#0B111E] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-auto px-[max(1.5rem,7.7vw)] min-[450px]:px-[max(1.7rem,4vw)] md:px-[max(2rem,4vw)] lg:px-[max(1.4rem,1.8vw)] py-[0.3rem] rounded-4xl bg-[#F1C020] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#F1C020] after:rotate-45 after:bottom-[-0.3rem] ">
            Javascript
          </span>
        </div>
        <div className="relative flex justify-center group">
          <span className="relative z-10 overflow-hidden bg-[hsl(219,32%,15%)] rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
            {/* Rotating border gradient */}
            {/* Rotating border gradient */}
            <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.7s_linear_infinite]">
              <span class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFFFFF] via-[#14C4B7] to-[#FFFFFF]"></span>
            </span>
            {/* Solid background to hide center of rotating border */}
            <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
            {/* Icon container */}
            <div className="aspect-square h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[100px]">
              <img
                src={tailwind}
                alt="..."
                className=" w-full h-full object-contain" />
            </div>
          </span>
          <span className="z-20 lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[0%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[0%] md:top-[-8%] lg:top-[15%] w-auto text-[#0B111E] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  px-[max(1.1rem,7.3vw)] min-[450px]:px-[max(1rem,2vw)] md:px-[max(1.5rem,3.5vw)] lg:px-[max(1rem,1.4vw)] py-[0.3rem] rounded-4xl bg-[#14C0B8] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#14C0B8] after:rotate-45 after:bottom-[-0.3rem] ">
            TailwindCSS
          </span>
        </div>
        <div className="relative flex justify-center group">
          <span className="relative z-10 overflow-hidden bg-[hsl(219,32%,15%)] rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
            {/* Rotating border gradient */}
            {/* Rotating border gradient */}
            <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.7s_linear_infinite]">
              <span class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFFFFF] via-[#39C1D7] to-[#FFFFFF]"></span>
            </span>
            {/* Solid background to hide center of rotating border */}
            <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
            {/* Icon container */}
            <div className=" h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[100px]">
              <img
                src={ReactImg}
                alt="..."
                className="aspect-square w-full h-full object-contain" />
            </div>
          </span>
          <span className="z-20 lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[0%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[0%] md:top-[-8%] lg:top-[15%] w-auto text-[#0B111E] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  px-[max(1.5rem,7.7vw)] min-[450px]:px-[max(2rem,3.7vw)] md:px-[max(2rem,4vw)] lg:px-[max(1.4rem,1.8vw)] py-[0.3rem] rounded-4xl bg-[#39BED5] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#39BED5] after:rotate-45 after:bottom-[-0.3rem] ">
            React.JS
          </span>
        </div>
        <div className="relative flex justify-center group">
          <span className="relative z-10 overflow-hidden  bg-[hsl(219,32%,15%)] rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
            {/* Rotating border gradient */}
            {/* Rotating border gradient */}
            <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.7s_linear_infinite]">
              <span class="absolute inset-0  rounded-3xl bg-gradient-to-r from-[#FFFFFF] via-[#764EB9] to-[#FFFFFF]"></span>
            </span>
            {/* Solid background to hide center of rotating border */}
            <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
            {/* Icon container */}
            <div className=" h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[100px]">
              <img
                src={Redux}
                alt="..."
                className="aspect-square w-full h-full object-contain" />
            </div>
          </span>
          <span className="z-20 lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-9%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-9%] md:top-[-17%] lg:top-[15%] w-auto text-[#e8eef1] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  px-[max(2rem,8.1vw)] min-[450px]:px-[max(2.2rem,5vw)] md:px-[max(2.5rem,4.7vw)] lg:px-[max(1.8rem,2vw)] py-[0.3rem] rounded-4xl bg-[#754DB8] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#754DB8] after:rotate-45 after:bottom-[-0.3rem] ">
            Redux
          </span>
        </div>
        <div className="relative flex justify-center group">
          <span className="relative z-10 overflow-hidden  bg-[hsl(219,32%,15%)] rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
            {/* Rotating border gradient */}
            {/* Rotating border gradient */}
            <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.7s_linear_infinite]">
              <span class="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#20A8DE] via-[#B0B0B0] to-[#E5E5E5]"></span>
            </span>
            {/* Solid background to hide center of rotating border */}
            <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
            {/* Icon container */}
            <div className=" h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[140px]">
              <img
                src={Responsive}
                alt="..."
                className="aspect-square w-full h-full object-contain" />
            </div>
          </span>
          <span className="z-20 lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[0%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[0%] md:top-[-8%] lg:top-[15%] w-[max(7.7rem,40vw)] min-[450px]:w-[max(10rem,30vw)] md:w-[max(14rem,28vw)] lg:w-[max(9.3rem,13.3vw)] max-w-[170px] min-[450px]:max-w-[220px] md:max-w-[260px] lg:max-w-[230px] text-[#000] font-semibold flex flex-col items-center visible lg:invisible  lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none  lg:px-[max(1rem,1.4vw)] py-[0.3rem] rounded-4xl bg-[#B0B0B0] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#B0B0B0] after:rotate-45 after:bottom-[-0.3rem] ">
            Responsive design
          </span>
        </div>
      </span>
    </span>
  );
}

export default Frontend;
