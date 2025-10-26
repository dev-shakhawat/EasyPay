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
    <section id="brands" className=' mt-[72px]  '>
        
        <Marquee   gradient={false} speed={50} pauseOnHover={true} direction="left"> 
            {allBrands.map((logo , index) => <Image className={"mx-[93px] cursor-pointer   "}  src={logo} width={100} height={100} alt="logo" /> )}
        </Marquee>
    </section>
  )
}
