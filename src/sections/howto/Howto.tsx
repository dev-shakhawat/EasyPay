import React from "react";
import Image from "next/image";
 

// components
import Container from "@/src/components/common/Container";
import SectionHead from "@/src/components/common/SectionHead";
import HowToStep from "./HowToStep";

// icons
import DownloadIcon from "@/src/assets/icons/DownloadIcon";
import Bankcard from "@/src/assets/icons/Bankcard";
import Paying from "@/src/assets/icons/Paying";

// image
import steper from "../../assets/images/steper.svg"

export default function Howto() {

    const steps = [
        {
            id: '01',
            icon: <DownloadIcon/> ,
            title: "Download Easy Pay",
            subtitle: "Get the Easy Pay app today from the App Store or Google Play hassle free."
        },
        {
            id: '02',
            icon: <Bankcard/> ,
            title: "Link your bank or card",
            subtitle: "Easily connect your account in seconds with advanced security for peace of mind."
        },
        {
            id: '03',
            icon: <Paying/> ,
            title: "Start paying",
            subtitle: "Easily split bills, send money to friends, and make smooth online payments instantly.",
        },
    ]
  return (
    <div className=" mt-30 bg-[#f6f6f6]  ">
      <Container>
        {/* header */}
        <div className="flex pt-30 justify-between items-end   ">
          <SectionHead title="how it works" subtitle="Make payments, transfers, and more in 3 simple steps" customeStyle=" " subtitleStyle="max-w-[561px]" />

          {/* button */}
        <button className="py-4 px-6 h-fit leading-[150%] rounded-[25px] bg-[#2E68FD] text-white font-semibold text-base font-outfit "> Get Started Now </button>
 
        </div>

        {/* how to cards */}
        <div className="flex justify-between p-6 bg-[#FFFFFF] mt-12 rounded-[16px]   ">
            {steps.map((step , index) => (
                <HowToStep key={index} id={step.id} icon={step.icon} title={step.title} subtitle={step.subtitle} lineShape={steps.length - 1 !== index} />
            ))}
        </div>


        {/* steper image */}
        <Image src={steper} width={100} height={100} alt="logo" className=" mt-6 w-full rounded-[12px]   " />

      </Container>
    </div>
  );
}
