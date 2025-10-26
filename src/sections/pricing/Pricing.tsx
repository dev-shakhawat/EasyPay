"use client";
import { motion , useInView } from "framer-motion";
import React from 'react'



// components
import SectionHead from '@/src/components/common/SectionHead'
import PricingCard from './PricingCard'


// image
import pricingShap from "../../assets/images/pricingShap.png"
import Image from 'next/image'
import Container from '@/src/components/common/Container'

export default function Pricing() {

    const pricingRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(pricingRef, { margin: "-100px" });

    const allPlan = [
        {
            name: "Free Plan" ,
            title: "Free for personal payments.",
            price: 0 ,
            benifits: [ "Up to 100 transections per month", "Basic proud protection", "Email support" ],
            btnText: "Get Free Plan", 
        },
        {
            name: "Advanced" ,
            title: "Minimal fees for advanced transactions",
            price: 19 ,
            benifits: [ "Up to 1000 transections per month", "Advanced proud protection", "Detailed transaction reports","Priority email & chat support" ],
            btnText: "Get Advanced Plan"
        },
        {
            name: "Business" ,
            title: "Premium business transactions",
            price: 29 ,
            benifits: [ "Unlimited transections per month", "Premium proud protection", "Detailed transaction reports","Priority email & chat support" ],
            btnText: "Get Business Plan", 
        },
    ]



  return (
    <section  id="pricing" ref={pricingRef} className='xl:mt-30 lg:mt-25 md:mt-20 mt-15 lg:pb-[105px] md:pb-[90px]   sm:pb-18 pb-14 px-5 xl:px-0 overflow-hidden  '>
        
        

        <Container>
        {/* header */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1 ,  delay: 0.2 }}    >
          <SectionHead title="Pricing" subtitle="Simple transparent pricing no hidden fees" customeStyle="text-center " subtitleStyle="xl:max-w-[490px] md:max-w-[400px] lg:max-w-[450px]  max-w-[300px] mx-auto"  />
        </motion.div>

            {/* plans */}
            <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1 ,  delay: 0.4 }}  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-6  gap-3 mt-12 relative    "  >

                {/* shap */}
                <Image src={pricingShap} width={100} height={100} alt="logo" className=" absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-full -z-1 lg:inline-block hidden  " />

                {allPlan.map((plan , index) => <PricingCard key={index} name={plan.name} title={plan.title} price={plan.price} benifits={plan.benifits} btnText={plan.btnText}   />)}

            </motion.div>

        </Container> 

    </section>
  )
}
