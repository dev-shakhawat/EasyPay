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
  return (
    <div className='mt-30'>
        
        <Container> 

            <div className="flex justify-between items-end  ">
                <SectionHead title="security" subtitle="We protect your money at every step with Easy Pay" customeStyle=" " subtitleStyle="max-w-[561px]" />

                <p className="max-w-[377px] font-outfit font-normal text-base text-[#4D525F] leading-[150%]      ">
                    Easy Pay ensures your money is protected at every step with advanced encryption, real-time monitoring, and multi-factor authentication.
                </p>
            </div>

            {/* cards */}
            <div 
              style={{backgroundImage: `url(${securitybg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} 
              className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 py-10 px-6   rounded-[16px] mt-12  ">

              {allSecurity.map((card) => (  
                <SecurityCard key={card.id} id={card.id} title={card.title} subtitle={card.subtitle} color={card.color} />
              ))}

            </div>

        </Container>
    </div>
  )
}
