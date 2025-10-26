"use client";
import Container from "@/src/components/common/Container";
import SectionHead from "@/src/components/common/SectionHead";
import { motion , useInView } from "framer-motion";
import {  useRef } from 'react';
import Link from "next/link";

// icon
import { GoArrowRight } from "react-icons/go"; 
import { MdDone } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoDocumentTextOutline } from "react-icons/io5";

const KYC  = () => {


    const kycref = useRef<HTMLDivElement>(null);
    const isInView = useInView(kycref, {  margin: "-100px" });
    const kycbenefits = [
        {
            title: "GDPR Compliant",
            color: "bg-green-100" ,
            icon : <MdDone />
        },
        {
            title: "Bank-Level Security",
            color: "bg-blue-100" ,
            icon : <VscWorkspaceTrusted/>
        },
        {
            title: "256-bit Encryption",
            color: "bg-purple-100" ,
            icon : <MdLock/>
        },
    ]

    const kycbounce = [
       {
          icon: <MdLock className="text-2xl text-white  " />,
          bg: "bg-gradient-to-br from-cyan-500 to-blue-600"
       },
       {
          icon: <VscWorkspaceTrusted className="text-2xl text-white  " />,
          bg: "bg-gradient-to-br from-emerald-500 to-teal-600 "
       },
       {
          icon: <IoDocumentTextOutline className="text-2xl text-white  " />,
          bg: "bg-gradient-to-br from-purple-500 to-indigo-600  "
       },
    ]

    const kycProcess = [
        {
            name: "Identity Check",
            color: "text-[#2E68FD]",
            bg: "bg-[#2E68FD]"
        },
        {
            name: "Document Scan",
            color: "text-[#2E68FD]",
            bg: "bg-[#2E68FD]"
        },
        {
            name: "Face Match",
            color: "text-[#5A5F6D]",
            bg: "bg-[#5A5F6D]"
        },
        {
            name: "AML Check",
            color: "text-[#5A5F6D]",
            bg: "bg-[#5A5F6D]"
        },
    ]

  return (
    <section ref={kycref} className=" lg:mt-30 md:mt-25 sm:mt-20 mt-15  relative bg-gradient-to-br from-white via-blue-50 to-indigo-100  py-20 flex items-center justify-center   overflow-hidden">
       
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 overflow-hidden"> 
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"/> 
      </div>
      
      <Container>
        <div className="    flex flex-col md:flex-row items-center relative z-10">
            
            <div className="w-full md:w-1/2 mb-16 md:mb-0 text-center md:text-left">  
             
                <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 1 }} > 
                    <SectionHead title="KYC Verification" subtitle=" Protect your identity with our advanced KYC platform. " customeStyle="xl:max-w-[600px] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px] text-center lg:text-left  " subtitleStyle="xl:max-w-[561px] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px] text-center lg:text-left  " />
                </motion.div>
        

                <p className="cnmPeragraph lg:mt-7 md:mt-5 mt-3 w-[80%]  ">
                    Experience the future of identity verification with our KYC platform. <span className="  font-urbanist font-bold font-lg text-[#2E68FD]  ">99.9% accuracy</span> , instant results, and global compliance.
                </p>
    
                <div className="flex flex-col sm:flex-row gap-6 items-center md:items-start lg:mt-10 md:mt-7 mt-5  "> 
                    
                    <Link href="#" className="bg-[#2E68FD] rounded-[30px] py-3 px-6 text-base font-outfit text-[#ffffff] font-semibold group " > 
                    Start Verification
                    </Link>
                    <Link href="#" className="kycbtn group " > 
                        <span>View Live Demo</span>
                        <GoArrowRight className=" text-xl group-hover:translate-x-1 transition-transform duration-300" />  
                    </Link>

                </div>

        
                <div className="mt-16 flex flex-col gap-5     text-gray-600">
                    {kycbenefits.map((benefit , index) => (
                        
                        <div key={index} className="flex items-center gap-3">
                            <div className={`w-8 h-8   rounded-full flex items-center justify-center ${benefit.color}`}>
                                {benefit.icon}
                            </div>
                            <span className=" cnmPeragraph  ">{benefit.title}</span>
                        </div> 
                    ))}
                </div>
            </div>

             
            <div className="w-full md:w-1/2 flex justify-center relative">
                <div className="relative w-full max-w-2xl">
                    
                    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200/80 p-8 shadow-2xl">
    
                    
                    <div className="relative h-64 mb-8 flex items-center justify-center">
                        <div className="absolute w-32 h-32 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full animate-ping opacity-30"/> 
                        <div className="absolute w-40 h-40 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full animate-pulse opacity-50"/>
                        
                        
                        <div className="relative z-10 flex gap-6"> 
                            
                            {kycbounce.map((bounce , index) => (
                                
                                <div key={index} className={` ${bounce.bg}   w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 animate-bounce delay-300`}>
                                    {bounce.icon}
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Verification Progress */}
                    <div className="mb-6">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                            <span className="cmnHeadingtwo">Verification Progress</span>
                            <span className="cmnHeadingtwo">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full w-4/5 shadow-lg shadow-blue-500/25 animate-pulse"></div>
                        </div>
                    </div>

                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        {kycProcess.map((process , index) => (
                        <div className={`flex items-center gap-2  ${process.color} ont-outfit font-normal `}  >
                            <div className={`w-2 h-2  ${process.bg}  rounded-full animate-pulse  `}/>
                            <span className="ont-outfit font-semibold text-sm ">{process.name}</span>
                        </div>
                            
                        ))}
                         
                    </div>
                    </div>

                    
                    <div className=" opacity-50  absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-2xl rotate-12 animate-float border border-blue-200/50 shadow-lg"></div>
                    <div className=" opacity-50  absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl -rotate-12 animate-float delay-1000 border border-purple-200/50 shadow-lg"></div>
                </div>
            </div>

        </div>

      </Container>

      {/* Bottom Gradient */} 
    </section>
  );
};

export default KYC;