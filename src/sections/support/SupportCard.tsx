import React from 'react'

type Props = {
    title: string,
    text: string
}

// icons
import { FaSlack } from "react-icons/fa";
import { TbBrandTwilio } from "react-icons/tb";
import { CgLinear } from "react-icons/cg";
import Link from 'next/link';

export default function SupportCard({title , text}: Props) {
  return (
    <div  className='hover:scale-103 transition-all ease-in-out duration-300    md:px-10 px-5 rounded-[15px] border-t-4 border-[#2E68FD]  bg-[#FFFFFF] lg:mx-5 md:mx-3 mx-2     '   >
        
        {/* title */}
        <h3 className="cmnHeadingtwo lg:mt-10 md:mt-7 mt-4   ">{title}</h3>

        {/* text */}
        <p className="cnmPeragraph mt-4 line-clamp-3 text-ellipsis ">{text}</p>

        {/* devider */}
        <hr  className='text-gray-100 lg:mt-7 md:mt-5 mt-3 ' />

        {/* companies */}
        <div className="flex items-center justify-between  mt-5 pb-5   ">
           <Link href="#" className='flex items-center cnmParagraph  ' >
            <FaSlack className='text-xl text-[#2E68FD] ' />
            <span>Slack</span>
           </Link>
           <Link href="#" className='flex items-center cnmParagraph  ' >
            <TbBrandTwilio className='text-2xl text-[#2E68FD] ' />
            <span>Twilio</span>
           </Link>
           <Link href="#" className='flex items-center cnmParagraph  ' >
            <CgLinear className='text-2xl text-[#2E68FD] ' />
            <span>Linear</span>
           </Link>
        </div>


    </div>
  )
}