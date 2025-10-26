import React from 'react'

import actionbg from "../../assets/images/calltoactionbg.svg"
import Container from '@/src/components/common/Container'

export default function CallToAction() {
  return (
    <div   className=' py-30   '  >
        <Container>

            {/* main box */}
            <div style={{backgroundImage: ` url(${actionbg.src}) `}} className="rounded-[16px]   ">
                
                <div className="max-w-[580px] mx-auto py-25 ">
                    <h2 className=" font-urbanist font-bold text-[40px] text-[#FFFFFF] leading-[120%] text-center   ">Ready to experience seamless secure payments globally</h2>

                    <p className="mt-3 font-outfit font-normal text-base text-[#FFFFFF] leading-[150%] text-center    ">Ready for hassle-free, secure payments anywhere in the world? Start using Monks Pay today it's fast, free, and focused on keeping your transactions secure!</p>


                    {/* button to action */}
                    <div className="flex mt-10 justify-center gap-3  ">
                        <button className="py-4 px-6 bg-[#2E68FD] rounded-[30px] font-outfit font-semibold text-base text-[#FFFFFF] leading-[150%]  cursor-pointer    ">Download the App</button>
                        <button className="py-4 px-6 border border-[#ffffff]  rounded-[30px] font-outfit font-semibold text-base text-[#FFFFFF] leading-[150%] cursor-pointer     ">Get Started Now</button>
                    </div>

                </div>

            </div>
        </Container>
    </div>
  )
}
