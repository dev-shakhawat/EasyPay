import React from 'react'



// components
import SectionHead from '@/src/components/common/SectionHead'
import PricingCard from './PricingCard'


// image
import pricingShap from "../../assets/images/pricingShap.png"
import Image from 'next/image'
import Container from '@/src/components/common/Container'

export default function Pricing() {

    const allPlan = [
        {
            name: "Free Plan" ,
            title: "Free for personal payments.",
            price: 0 ,
            benifits: [ "Up to 100 transections per month", "Basic proud protection", "Email support" ],
            btnText: "Get Free Plan"
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
            btnText: "Get Business Plan"
        },
    ]
  return (
    <section className='mt-30 pb-[105px] '>
        
        {/* header */}
        <SectionHead title="Pricing" subtitle="Simple transparent pricing no hidden fees" customeStyle="text-center " subtitleStyle="max-w-[490px] mx-auto" />
        

        <Container>

            {/* plans */}
            <div className="grid grid-cols-3 gap-6 mt-12 relative   ">

                {/* shap */}
                <Image src={pricingShap} width={100} height={100} alt="logo" className=" absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-full -z-1  " />

                {allPlan.map((plan , index) => <PricingCard key={index} name={plan.name} title={plan.title} price={plan.price} benifits={plan.benifits} btnText={plan.btnText}  />)}

            </div>

        </Container> 

    </section>
  )
}
