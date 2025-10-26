"use client";
import { motion , useInView } from "framer-motion";
import React from 'react'

// components
import Container from '@/src/components/common/Container'
import SectionHead from '@/src/components/common/SectionHead'
import SecurityCard from './SecurityCard'

// image
import securitybg from "../../assets/images/securitybg.png"

export default function Security() {

    const allSecurity = [
        {
            id: 1,
            title: "Two-factor authentication",
            subtitle: "Two-factor authentication ensures added protection by using verification steps.",
            color: "#2E68FD"
        },
        {
            id: 2,
            title: "Fraud detection and alerts",
            subtitle: "Fraud detection safeguards your money, sending instant alerts for any activity.",
            color: "#FC4343"
        },
        {
            id: 3,
            title: "Transaction notifications",
            subtitle: "Instant notifications for transaction keep you informed to manage your finances.",
            color: "#08A965"
        },
        {
            id: 4,
            title: "Biometric access",
            subtitle: "Easily and securely log in with biometric features, and facial recognition.",
            color: "#3B7793"
        },
        {
            id: 5,
            title: "End-to-end encryption",
            subtitle: "By encryption, protecting your data from unauthorized access.",
            color: "#D77E1B"
        },
        {
            id: 6,
            title: "24/7 Protection support",
            subtitle: "Our dedicated team is available around the clock to help you.",
            color: "#932EFA"
        },
    ]
    const securityRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(securityRef, { margin: "-100px" });
  return (
    <section id="security" ref={securityRef} className='lg:mt-30 md:mt-25 sm:mt-20 mt-15  px-5 xl:px-0 overflow-hidden   '>
        
        <Container> 

            <div className="lg:flex justify-between items-end  ">

                <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 1 }} > 
                  <SectionHead title="security" subtitle="We protect your money at every step with Easy Pay" customeStyle="flex flex-col items-center lg:items-start " subtitleStyle="xl:max-w-[561px] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px] text-center lg:text-left  " />
                </motion.div>
                
                <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} transition={{ duration: 1 }}  >
                    <p className="xl:max-w-[377px] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[350px] max-w-[300px] mx-auto lg:mx-0 text-center lg:text-left   cnmPeragraph     ">
                        Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
                    </p> 
                </motion.div>
            </div>

            {/* cards */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 1 , delay: 0.5 }}
              style={{backgroundImage: `url(${securitybg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} 
              className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 py-10 px-6 rounded-[16px] mt-12  ">

              {allSecurity.map((card) => (  
                <SecurityCard key={card.id} id={card.id} title={card.title} subtitle={card.subtitle} color={card.color} />
              ))}

            </motion.div>

        </Container>
    </section>
  )
}
