import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';


// images
import logo1 from "../../assets/images/brand1.png";
import logo2 from "../../assets/images/brand2.png";
import logo3 from "../../assets/images/brand3.png";
import logo4 from "../../assets/images/brand4.png";
import logo5 from "../../assets/images/brand5.png";
import logo6 from "../../assets/images/brand6.png";


export default function Brands() {
    const allBrands = [logo1,logo2,logo3,logo4,logo5,logo6];
  return (
    <section id="brands" className=' xl:mt-[72px] lg:mt-15 mt-10  '>
        
        <Marquee   gradient={false} speed={50} pauseOnHover={true} direction="left"> 
            {allBrands.map((logo , index) => <Image className={"xl:mx-[93px] lg:mx-20 md:mx-16 sm:mx-12 mx-5 cursor-pointer w-1/2 lg:w-auto   "}  src={logo} width={100} height={100} alt="logo"   /> )}
        </Marquee>
    </section>
  )
}
