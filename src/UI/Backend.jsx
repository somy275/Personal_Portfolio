import Node from "../assets/Node.js.webp"
import Express from "../assets/Express.webp"
const Backend = () => {
  return (
   <span className=" min-[450px]:w-auto min-[450px]:max-w-[620px] md:max-w-[780px] md:w-[90%]  h-auto   flex flex-col justify-around items-center mt-[1rem] ">
      <h5 className="relative text-[#43b0f1] text-center pb-[4rem] md:pb-[5rem] lg:pb-[3rem] text-[max(1.8rem,8vw)] min-[450px]:text-[max(2.3rem,5.8vw)] md:text-[max(2.8rem,5.3vw)] lg:text-[clamp(1.4375rem,1.1596rem+0.5123vw,1.75rem)] font-bold overflow-hidden after:absolute after:top-0 after:bottom-[55%] after:left-0 after:right-0 after:border-b-[.22rem] after:border-solid after:border-b-[#43b0f1]">
        Backend Development
      </h5>
      <span className="w-screen h-auto flex flex-wrap justify-around lg:grid grid-cols-4 gap-[3rem] min-[450px]:gap-[3.5rem]  lg:gap-y-[2rem] place-items-center px-[1rem]">
        <div className="relative   flex justify-center group">
                  <span className="relative overflow-hidden z-10 bg-[hsla(218, 32%, 15%, 0.50)]  rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
                    {/* Rotating border gradient */}
                    {/* Rotating border gradient */}
                    <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.4s_linear_infinite] ">
                      <span class="absolute inset-0   rounded-3xl bg-gradient-to-r from-[#FFFFFF] via-[#83CE27] to-[#FFFFFF]"></span>
                    </span>
        
                    {/* Solid background to hide center of rotating border */}
                    <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
                    {/* Icon container */}
        
                    <div className="h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[100px]">
                      <img
                        src={Node}
                        alt="HTML"
                        className="aspect-square w-full h-full object-contain" />
                    </div>
                  </span>
                  {/* Tooltip label */}
                  <span className="z-[20] lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-10%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[-11%] md:top-[-17%] lg:top-[15%]  text-[#0B111E] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-auto px-[max(1.8rem,8vw)] min-[450px]:px-[max(2.3rem,5.8vw)] md:px-[max(2.8rem,5vw)] lg:px-[max(2rem,2vw)] py-[0.3rem] rounded-4xl bg-[#83CE27] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#83CE27] after:rotate-45 after:bottom-[-0.3rem] ">
                    NodeJs
                  </span>
                </div>
                <div className="relative   flex justify-center group">
                  <span className="relative overflow-hidden z-10 bg-[hsl(219,32%,15%)]  rounded-2xl py-[2rem] px-[5rem] flex flex-col items-center justify-center w-auto h-auto">
                    {/* Rotating border gradient */}
                    {/* Rotating border gradient */}
                    <span class="absolute inset-[-9.3rem] -z-[1] rounded-3xl overflow-hidden animate-[spin_1.4s_linear_infinite] ">
                      <span class="absolute inset-0   rounded-3xl bg-gradient-to-r from-[#FFFFFF] via-[#000000] to-[#FFFFFF]"></span>
                    </span>
        
                    {/* Solid background to hide center of rotating border */}
                    <span className="absolute inset-[4px] hover:bg-[hsl(219,32%,12%)] bg-[hsl(219,32%,12%)] rounded-2xl -z-[1]"></span>
                    {/* Icon container */}
        
                    <div className="h-[max(3.4rem,17vw)] min-[450px]:h-[max(4.8rem,12.7vw)] md:h-[max(6rem,10.5vw)] lg:h-[max(4.5rem,6vw)] lg:max-h-[100px]">
                      <img
                        src={Express}
                        alt="HTML"
                        className="aspect-square w-full h-full object-contain" />
                    </div>
                  </span>
                  {/* Tooltip label */}
                  <span className="z-[20] lg:group-hover:visible lg:group-hover:opacity-[1] lg:group-hover:top-[-0%] text-[max(.7rem,3.5vw)] min-[450px]:text-[max(1rem,3vw)] md:text-[max(1.45rem,2.7vw)] lg:text-[clamp(0.875rem,0.4816rem+0.6148vw,1.25rem)] absolute top-[0%] md:top-[-5%] lg:top-[15%]  text-[White] font-semibold flex flex-col items-center visible lg:invisible lg:opacity-0 shadow-[0_10px_10px_rgba(0,0,0,0.5)] transition-[top_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55),opacity_0.25s_cubic-bezier(0.68,-0.55,0.265,1.55)] pointer-events-none w-auto px-[max(1.8rem,8vw)] min-[450px]:px-[max(2.3rem,5.8vw)] md:px-[max(2.8rem,5vw)] lg:px-[max(2rem,2vw)] py-[0.3rem] rounded-4xl bg-[#000000] after:absolute after:w-[0.7rem] after:h-[0.7rem] after:bg-[#000000] after:rotate-45 after:bottom-[-0.3rem] ">
                    ExpressJS
                  </span>
                </div>
      </span>
      </span>
  )
}

export default Backend