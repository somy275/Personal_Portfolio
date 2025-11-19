import React from "react";
import Frontend from "../UI/Frontend";
import Backend from "../UI/Backend";
import Others from "../UI/Others";
const Skills = () => {
  return (
    <section className="h-auto w-screen flex flex-col items-center px-[2rem] lg:px-[5rem]">
      <div className="mt-[2rem] text-center ">
        <p className="text-[#e8eef1a0] text-[max(.8rem,4.3vw)] min-[450px]:text-[max(1.2rem,3.2vw)] md:text-[max(1.5rem,2.8vw)] lg:text-[clamp(0.8125rem,0.4846rem+0.5123vw,1.125rem)]">
          My Abilities
        </p>
        <h5 className="font-bold text-[#43b0f1] text-[max(1.5rem,7.8vw)] min-[450px]:text-[max(2rem,5.5vw)] md:text-[max(2.6rem,5vw)] lg:text-[clamp(1.4375rem,1.1096rem+0.5123vw,1.75rem)]">
          My Experience
        </h5>
      </div>
      <div className="w-auto h-auto flex flex-col items-center justify-center gap-y-[6rem] lg:justify-between py-[5rem]">
        <Frontend />
        <Backend />
        <Others />
      </div>
    </section>
  );
};

export default Skills;
