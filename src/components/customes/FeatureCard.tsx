import React from 'react'

interface featurecardprops {
    icon : React.ReactNode
    title : string
    subtitle : string
    bgcolor : string
}

export default function FeatureCard({icon ,  title , subtitle , bgcolor }:featurecardprops) {
  return (
    <div className={`${bgcolor} rounded-[16px] px-5.5 py-8  flex flex-col items-center       `}  >
      
      {/* icon */}
      {icon}

      {/* title */}
      <h3 className=" font-urbanist font-bold text-xl mt-10 text-[#01081B] leading-[120%]   ">{title}</h3>

      {/* subtitle */}
      <p className="cnmPeragraph  mt-2 text-center    ">{subtitle}</p>

    </div>
  )
}
