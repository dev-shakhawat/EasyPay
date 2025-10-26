"use client";
import { motion , useInView } from "framer-motion";
import React from 'react'

// components
import Container from '@/src/components/common/Container'
import SectionHead from '@/src/components/common/SectionHead'


// icons
import PaymentIcon from '@/src/assets/icons/PaymentIcon'
import HiddenFilesIcon from '@/src/assets/icons/HiddenFilesIcon'
import WalletIcon from '@/src/assets/icons/WalletIcon'
import SecureTransIcon from '@/src/assets/icons/SecureTransIcon'
import FeatureCard from '@/src/components/customes/FeatureCard'


export default function Features() {

    const allFeatures = [
      {
        icon : <PaymentIcon/> , 
        title: "Instant Payments" , 
        subtitle: "Send money to friends or family in real-time, for free." ,
        bgcolor: "bg-[#f3f7ff] "
      },
      {
        icon : <HiddenFilesIcon/> , 
        title: "No hidden fees" , 
        subtitle: "Clear and simple pricing. Always be aware of your costs." ,
        bgcolor: "bg-[#fbf6ef] "
      },
      {
        icon : <WalletIcon/> , 
        title: "No hidden fees" , 
        subtitle: "Clear and simple pricing. Always be aware of your costs." ,
        bgcolor: "bg-[#eef9fe] "
      },
      {
        icon : <SecureTransIcon/> , 
        title: "Secure transactions" , 
        subtitle: "End-to-end encryption for all transactions." ,
        bgcolor: "bg-[#f4edfc] "
      },
    ]

    const featureRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(featureRef, { margin: "-100px" });
 

  return (
    <section id="features" ref={featureRef} className='xl:mt-[120px] lg:mt-25 md:mt-20 mt-15   '>
        
        <Container>
             
            {/* section head */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1 }}  >
              <SectionHead title="Features" subtitle="Why choose Easy Pay for effortless payments?" customeStyle="text-center" subtitleStyle="text-center  lg:max-w-[450px] max-w-[70%] md:max-w-[60%]  mx-auto " />
            </motion.div> 

            <motion.div initial={{ opacity: 0, y: -50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }} transition={{ duration: 1 }} className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-6 lg:gap-5 md:gap-4 gap-3 xl:mt-12 lg:mt-10 md:mt-8 mt-6  ">

              {allFeatures.map((feature , index) =>  <FeatureCard key={index}  icon={feature.icon} title={feature.title} subtitle={feature.subtitle} bgcolor={feature.bgcolor}   /> )}

            </motion.div>
             
        </Container>
    </section>
  )
}
