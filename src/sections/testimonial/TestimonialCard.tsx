import React from 'react'
import Image from 'next/image'
import Star from '@/src/assets/icons/Star'

interface testimonialcardprops {
    stars : number
    text : string
    name : string
    job : string
    image : string
}

export default function TestimonialCard({stars , text , name , job , image}:testimonialcardprops) {
  return (
    <div className=' py-8 px-6 rounded-[16px] bg-[#FFFFFF] max-w-[419px] mx-2 h-full    '>

      {/* all stars */}
      <div className="flex gap-1  ">
        {Array.from({ length: stars }).map((_, index) => <Star key={index} /> )  }
      </div>

      {/* text */}
      <p className=" font-outfit font-normal text-base text-[#4D525F] leading-[150%] mt-4 line-clamp-5 text-ellipsis    ">{text}</p>

      {/* user */}
      <div className="flex items-center mt-8 gap-[9px] ">

        {/* image */}
        <Image src={image} width={100} height={100} alt="logo" className=" max-w-[48px]   " />

        {/* name & job */}
        <div className="">
          <h3 className=" font-urbanist font-semibold text-lg leading-[120%] text-[#01081B]    ">{name}</h3>
          <p className= " font-outfit font-normal text-base leading-[150%] text-[#4D525F] line-clamp-1 text-ellipsis  ">{job}</p>
        </div>

      </div>


    </div>
  )
}
