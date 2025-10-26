"use client";
import { motion , useInView } from "framer-motion";
import React from 'react'

import actionbg from "../../assets/images/calltoactionbg.svg"
import Container from '@/src/components/common/Container'

export default function CallToAction() {

    const actionRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(actionRef, { margin: "-100px" });

  return (
    <section ref={actionRef}  className=' lg:py-30 md:py-20 py-10   '  >
        <Container>

            {/* main box */}
            <div style={{backgroundImage: ` url(${actionbg.src}) `}} className="rounded-[16px] lg:py-25 md:py-20 py-15  ">
                
                <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1 }} className="lg:max-w-[580px] md:max-w-[500px] max-w-[300px] mx-auto  ">
 
                    <h2 className=" font-urbanist font-bold lg:text-[40px] md:text-[30px] text-xl text-[#FFFFFF] leading-[120%] text-center  mx-auto    ">Ready to experience seamless secure payments globally</h2>

                    <p className="mt-3 font-outfit font-normal text-base text-[#FFFFFF] leading-[150%] text-center    ">Ready for hassle-free, secure payments anywhere in the world? Start using Monks Pay today it's fast, free, and focused on keeping your transactions secure!</p>



                </motion.div>
                {/* button to action */}
                <div className="flex mt-10 justify-center gap-3  ">
                    <button className="lg:py-4 py-2 lg:px-6 md:px-4 px-3 bg-[#2E68FD] rounded-[30px] font-outfit font-semibold lg:text-base text-sm text-[#FFFFFF] leading-[150%]  cursor-pointer    ">Download the App</button>
                    <button className="lg:py-4 py-2 lg:px-6 md:px-4 px-3 border border-[#ffffff]  rounded-[30px] font-outfit font-semibold lg:text-base text-sm text-[#FFFFFF] leading-[150%] cursor-pointer     ">Get Started Now</button>
                </div>

            </div>
        </Container>
    </section>
  )
}
