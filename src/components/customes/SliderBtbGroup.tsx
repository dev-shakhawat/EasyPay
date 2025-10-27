import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
 
export default function SliderBtbGroup({next,previous}: any) {
  return (
    <div className="flex items-center gap-2 mt-10 justify-center lg:justify-start  ">
      {/* prev button */}
      <button
        onClick={() => previous()}
        type="button"
        className=" group border border-[#CFD0D1] hover:border-[#01081B] hover:bg-[#01081B] w-[56px] h-[56px] rounded-full grid place-items-center  duration-300 cursor-pointer  "
      >
        <IoIosArrowBack className="duration-300 text-2xl text-[#4D525F] group-hover:text-[#FFFFFF] " />
      </button>

      {/* next button */}
      <button
        onClick={() => next()}
        type="button"
        className=" group border border-[#CFD0D1] hover:border-[#01081B] hover:bg-[#01081B] w-[56px] h-[56px] rounded-full grid place-items-center  duration-300 cursor-pointer rotate-[180deg]  "
      >
        <IoIosArrowBack className="duration-300 text-2xl text-[#4D525F] group-hover:text-[#FFFFFF] " />
      </button>
    </div>
  );
}