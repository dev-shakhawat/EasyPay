import Link from 'next/link'
import React from 'react'

type pricingcardprops = {
    name : string
    title : string
    price : number
    benifits : string[]
    btnText : string
}


// icon
import { MdDone } from "react-icons/md";

export default function PricingCard({name , title , price , benifits , btnText}:pricingcardprops) {
  return (
    <div className='group relative border border-[#e7e7e8] rounded-[16px] py-10 px-6 bg-white hover:bg-black transition-all ease-in-out duration-300   '>

        {/* name */}
        <h3 className=" font-urbanist font-bold text-2xl text-[#01081B] group-hover:text-[#FFFFFF] leading-[120%] transition-all ease-in-out duration-300   ">{name}</h3>

        {/* title */}
        <p className=" font-outfit font-normal text-base text-[#4D525F] group-hover:text-[#B1B2B2] leading-[150%] mt-1 transition-all ease-in-out duration-300   ">{title}</p>

        {/* price */}
        <div className="mt-6 flex items-end  ">
           <p className=" font-urbanist font-bold text-[56px] text-[#01081B] group-hover:text-[#FFFFFF] leading-[120%] transition-all ease-in-out duration-300    ">${price}</p>
           <span className='pb-2 font-outfit font-normal text-base group-hover:text-[#B1B2B2] transition-all ease-in-out duration-300  '>/month</span>
        </div>

        {/* devider */}
        <div className='my-6 relative w-full h-[1px] bg-gradient-to-l  from-[#f9f9f9]/20  via-[#e0e0e0]/60  to-[#f9f9f9]/20 '/>

        {/* benifits */}
        <ul className='flex flex-col gap-2 pb-3 mb-20  '>
            {benifits.map((benifit , index) => (
                <li className='flex gap-2.5 items-center ' key={index}>
                    <span className="w-7 h-7 rounded-full bg-[#ECF0FB] group-hover:bg-[#26272C] transition-all ease-in-out duration-300 grid place-items-center   "> 
                      <MdDone className='text-[#2E68FD] group-hover:text-[#FFFFFF] transition-all ease-in-out duration-300   '/>
                    </span>
                    <p className='font-outfit font-normal text-base group-hover:text-[#B1B2B2] transition-all ease-in-out duration-300   '>{benifit}</p>
                </li>
            ))}
        </ul>

        {/* btn */}
        <Link  href={`#`} className='border border-[#01081b] hover:border-[#2E68FD] group-hover:border-[#FFFFFF] w-[85%]  py-4 px-6 rounded-[30px] font-outfit font-semibold text-base group-hover:text-white transition-all ease-in-out duration-300 bg-white hover:bg-[#2E68FD] group-hover:bg-black absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-center         '  >{btnText}</Link>


    </div>
  )
}
