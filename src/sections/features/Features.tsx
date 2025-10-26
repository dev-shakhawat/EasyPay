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
    <section ref={featureRef} className='mt-[120px]'>
        
        <Container>
             
            {/* section head */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1 }}  >
              <SectionHead title="Features" subtitle="Why choose Easy Pay for effortless payments?" customeStyle="text-center" subtitleStyle="text-center max-w-[450px] mx-auto " />
            </motion.div> 

            <motion.div initial={{ opacity: 0, y: -50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: -50 }} transition={{ duration: 1 }} className="grid grid-cols-4 gap-6 mt-12  ">

              {allFeatures.map((feature , index) =>  <FeatureCard key={index}  icon={feature.icon} title={feature.title} subtitle={feature.subtitle} bgcolor={feature.bgcolor}   /> )}

            </motion.div>
             
        </Container>
    </section>
  )
}
