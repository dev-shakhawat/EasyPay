"use client";
import { motion } from "framer-motion";
import React from "react";

// next components
import Image from "next/image";

// images
import bannerbg from "../../assets/images/bannerbg.png";
import bannervictor from "../../assets/images/bannervictor.svg";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import graphic from "../../assets/images/graphic.svg";

// custome components
import Container from "@/src/components/common/Container";

export default function Banner() {
  return (
    <section style={{ backgroundImage: `url(${bannerbg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }} className=" banner lg:px-5  " >
      
      <Container>

        <div className="lg:flex  relative  ">

            {/* banner text */}
            <motion.div  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="lg:max-w-[638px] lg:pb-[159px] pb-5 sm:pb-10 md:pb-25 ">
              <div className="px-1 md:px-2 lg:px-0">

                  <span className="bannerTitle   ">
                    easy payment 
                  </span>

                  <div className="relative ">
                    
                    <p className="bnnerhead  ">Pay fast and smarter from anywhere</p>
                    <Image src={bannervictor} width={100} height={100} alt="logo" className=" absolute xl:top-17 top-11 lg:top-13 lg:right-3  right-70   xl:w-[490px] lg:w-[390px] md:w-[300px]    hidden md:inline-block   " />

                  </div>

                  <p className="bannerText  "> 
                    Experience the future of payments: fast, secure, and tailored for the next generation's convenience and trust.
                  </p>

                  <div className="flex justify-center lg:justify-start gap-2 lg:mt-12 md:mt-10 sm:mt-8 mt-3   ">
                    <Image src={appstore} width={100} height={100} alt="logo" className=" max-w-[144px]   " />
                    <Image src={playstore} width={100} height={100} alt="logo" className=" max-w-[144px]   " />
                  </div> 

              </div>

            </motion.div>
            
            {/* banner image */}
            <Image priority src={graphic} width={100} height={100} alt="bannergraphic" className="  w-[643px] lg:w-[550px] xl:w-[643px]    lg:absolute bottom-0 xl:-right-[56px] lg:-right-[0px] object-cover   " />



        </div>

      </Container>
    </section>
  );
}
