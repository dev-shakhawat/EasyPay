 
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
        
        <h2 className={`${subtitleStyle} font-urbanist font-semibold lg:font-bold xl:text-[40px] lg:text-[36px] md:text-[32px] sm:text-[28px] text-[24px] text-[#01081B] leading-[120%] mt-1    `}>{subtitle}</h2>
    
    </div>
  )
}
