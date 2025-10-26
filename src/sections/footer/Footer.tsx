"use client";
import { motion , useInView } from "framer-motion";
import Container from '@/src/components/common/Container'
import logo from "../../assets/images/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import footerShap from "../../assets/images/footerShap.png"
import { useRef } from "react";

export default function Footer() {
  const links = [
    { 
      title: "Short links",
      links: [
        {name: "Features", url: "#"},
        {name: "How it works", url: "#"},
        {name: "Security", url: "#"},
        {name: "Testimonial", url: "#"},
      ]
     },
    { 
      title: "Other pages",
      links: [
        {name: "Privacy policy", url: "#"},
        {name: "Terms & conditions", url: "#"},
        {name: "404", url: "#"}, 
      ]
     },
  ]
  const footRef =  useRef<HTMLDivElement>(null);
  const isInView = useInView(footRef, { margin: "-100px" });

  return (
    <footer ref={footRef} className='relative px-5 xl:px-0  '>
      
      <Container>

        {/* main footer box */}
        <div className="md:grid grid-cols-1 md:grid-cols-2    ">

          <motion.div  initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.5 }}>
            <Image src={logo} width={100} height={100} alt="logo" className=" w-[153px]   " />
            <p className="mt-4 font-outfit font-normal text-base text-[#4D525F] leading-[150%]  max-w-[278px]     ">Easy Pay offers secure, seamless, and fee-free payments for effortless global transactions.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }} transition={{ duration: 0.5 }} className=" flex md:justify-end gap-25 mt-10 lg:mt-0  ">
            {links.map((link , index) => (
              <div key={link.title}>
                <h3 className=" font-urbanist font-bold text-xl text-[#01081B] leading-[120%]   ">{link.title}</h3>

                <ul className='mt-4 flex flex-col lg:gap-3 gap-1.5  '>
                  {link.links.map((link , index) => (
                    <li key={index}>
                      <Link href={link.url} className=" font-outfit font-normal text-base text-[#4D525F] leading-[150%]   ">{link.name}</Link>
                    </li>
                  ))}
                </ul>
 
              </div>
            ))}
          </motion.div>

        </div>

        <hr className='mt-[5px] text-[#E7E7E8]  ' />

        {/* copy right */}
        <div className="pt-[5px] pb-8  ">

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="text-center font-outfit font-light text-base leading-[150%] text-[#878787]    ">2024 ©Easy Pay. All rights reserved. Fintech Landing Page by MUHIB</motion.p>

        </div>
      </Container>

      <Image src={footerShap} width={100} height={100} alt="logo" className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-1 w-1/2   " />
    </footer>
  )
}
