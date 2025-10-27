"use client";
import { motion, useInView } from "framer-motion";
import React from 'react';

// components
import Container from '@/src/components/common/Container';
import SectionHead from '@/src/components/common/SectionHead';
import ScaleCard from "./ScaleCard";

// icon
import { IoIosCloudOutline } from "react-icons/io";

export default function GlobalScale() {

    
  const statsData = [
    {
      id: 1,
      number: "500M+",
      label: "API requests per day, peaking at 13,000 requests a second",
      suffix: ""
    },
    {
      id: 2,
      number: "99.999%",
      label: "historical uptime for Easy Pay services",
      suffix: ""
    },
    {
      id: 3,
      number: "150+",
      label: "countries supported worldwide",
      suffix: ""
    },
    {
      id: 4,
      number: "Billions",
      label: "dollars processed annually",
      suffix: "+"
    }
  ];

  const globalRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(globalRef, { margin: "-100px" });

  return (
    <section id="global-scale" ref={globalRef} className='lg:mt-30 md:mt-25 sm:mt-20 mt-15 px-5 xl:px-0 overflow-hidden bg-white py-20'>
      
      <Container>
        
        <div className="lg:flex justify-between items-start gap-16">
          
          {/* Left Content  */}
          <motion.div  initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 0.8 }} className="w-full lg:w-2/5 mb-12 lg:mb-0" >
            
            <SectionHead title="Global scale"  subtitle="The backbone for global commerce"  customeStyle="flex flex-col items-start text-left" subtitleStyle="text-2xl md:text-3xl  mt-4"  />
            
            <p className="cnmPeragraph mt-6 mb-8">
              Easy Pay makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
            </p>

            <div className="flex items-center gap-3 ">
              <div className="w-2 h-2 bg-[#22c55e] rounded-full"/> 
              <span className="cnmPeragraph">Trusted by businesses worldwide</span>
            </div>

          </motion.div>

          {/* Right  */}
          <motion.div  initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full lg:w-3/5" >
            <div className="grid md:grid-cols-2 gap-8">
              {statsData.map((stat, index) =>  <ScaleCard key={index} isInView={isInView} stat={stat} index={index} />)}
            </div>

            {/* Additional */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100" >
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center flex-shrink-0">
                   <IoIosCloudOutline size={24} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="cmnHeadingtwo mb-2">Global infrastructure</h4>
                  <p className="cnmPeragraph">
                    Built on a robust global infrastructure that ensures reliability, security, and speed for your business transactions anywhere in the world.
                  </p>
                </div>
              </div>

            </motion.div>


          </motion.div>
        </div>
      </Container>

    </section>
  );
}