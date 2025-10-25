import React from 'react'

interface sectionheadprops{
    title: string,
    subtitle:string,
    customeStyle: string,
    subtitleStyle: string
}

export default function SectionHead({title , subtitle , customeStyle , subtitleStyle}:sectionheadprops) {
  return (
    <div className={customeStyle}>
        <p className=" font-outfit font-semibold text-base text-[#932EFA] leading-[150%] uppercase  ">{title}</p>
        <h2 className={`${subtitleStyle} font-urbanist font-bold text-[40px] text-[#01081B] leading-[120%] mt-1   `}>{subtitle}</h2>
    </div>
  )
}
