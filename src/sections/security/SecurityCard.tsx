import React from 'react'

type securitycardprops = {
    id : number
    title : string
    subtitle : string
    color : string
}
// ''
export default function SecurityCard({id , title , subtitle , color}:securitycardprops) {
  return (
    <div className={` relative py-2 px-6 group cursor-pointer after:content-[""] after:absolute after:top-0 after:-left-[19.5px]   after:w-[2px] after:h-[100%] after:bg-gradient-to-b after:from-[#f9f9f9] after:via-[#e0e0e0] after:to-[#f9f9f9] ${id < 7 && 'after:hidden md:after:block'} ${id == 1 || id == 3 || id == 5 ? "md:after:hidden  " : "" } ${id == 1 || id == 4 ? "lg:after:hidden " : "lg:after:block"}   `}>
        
        {/* sign */}
        <div className="ml-2.5 relative w-2.5 h-2.5 rounded-full  " style={{background: color}}  >
           <div style={{background: color}} className="absolute top-0 left-0 w-full h-full transform scale-300 rounded-full opacity-20  group-hover:animate-security  "/> 
        </div>

        <h3 className=" mt-[33px] font-urbanist font-bold text-xl text-[#01081B] leading-[120%] ">{title}</h3>

        <p className="font-outfit font-normal text-base text-[#4D525F] leading-[150%] max-w-[300px]  ">{subtitle}</p>

    </div>
  )
}
