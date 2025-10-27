 
import React from 'react'

interface sectionheadprops{
    title: string,
    subtitle:string,
    customeStyle: string,
    subtitleStyle: string
}

export default function SectionHead({title , subtitle , customeStyle , subtitleStyle}:sectionheadprops) {
  return (
    <div  className={customeStyle}>

        <p className=" font-outfit font-medium md:font-semibold text-base text-[#932EFA] leading-[150%] uppercase  ">{title}</p>
        
        <h2 className={`${subtitleStyle} font-urbanist font-semibold lg:font-bold lg:text-[40px] md:text-[36px] sm:text-[32px]  text-2xl text-[#01081B] leading-[120%] mt-1    `}>{subtitle}</h2>
    
    </div>
  )
}
