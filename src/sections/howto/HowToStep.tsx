import React from 'react'

interface howtostepprops {
    id : string
    icon : React.ReactNode
    title : string
    subtitle : string,
    lineShape : boolean
}

export default function HowToStep({id , icon , title , subtitle , lineShape}:howtostepprops) {
  return (
    <div
      className={`w-fit relative px-6 pb-6 ${ lineShape
      ? 'after:content-[""] after:absolute after:top-1/2 after:-right-[60.75px] after:-translate-y-1/2 after:w-[2px] after:h-[68%] after:bg-gradient-to-b after:from-[#f9f9f9] after:via-[#e0e0e0] after:to-[#f9f9f9]'
      : '' }`} >
        <p className="ml-3.5 font-urbanist font-bold text-[80px] text-[#F3F3F3] leading-[100%] ">{id}</p>

        <div className="absolute top-12 left-12  ">
            {icon}
        </div>

        <h3 className=" mt-16 font-urbanist font-bold text-xl text-[#01081B] leading-[120%]     ">
            {title} 
        </h3>

        <p className="mt-2 cnmPeragraph max-w-[245px] ">
            {subtitle}
        </p>

    </div>
  )
}
