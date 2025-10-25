import React from "react";

// next components
import Image from "next/image";

// images
import bannerbg from "../../assets/images/bannerbg.png";
import bannervictor from "../../assets/images/bannervictor.png";
import playstore from "../../assets/images/playstore.png";
import appstore from "../../assets/images/appstore.png";
import graphic from "../../assets/images/graphic.svg";

// custome components
import Container from "@/src/components/common/Container";

export default function Banner() {
  return (
    <section style={{ backgroundImage: `url(${bannerbg.src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }} className="    " >
      
      <Container>

        <div className="flex relative  ">

            {/* banner text */}
            <div className="max-w-[638px] pb-[159px] ">
              <div className="">

                  <span className="mt-[201px] inline-block font-outfit font-semibold text-base text-[#787878] leading-[150%] uppercase    ">easy payment</span>
                  <div className="relative ">
                    
                    <p className="font-urbanist font-bold text-[64px] text-[#01081B] leading-[120%]  ">Pay fast and smarter from anywhere</p>
                    <Image src={bannervictor} width={100} height={100} alt="logo" className=" absolute top-17 right-5 w-[490px]   " />

                  </div>

                  <p className="mt-3 font-outfit text-lg text-[#4D525F] leading-[150%] max-w-[490px]   "> 
                    Experience the future of payments: fast, secure, and tailored for the next generation's convenience and trust.
                  </p>

                  <div className="flex gap-2 mt-12 ">
                    <Image src={appstore} width={100} height={100} alt="logo" className=" max-w-[144px]   " />
                    <Image src={playstore} width={100} height={100} alt="logo" className=" max-w-[144px]   " />
                  </div> 

              </div>

            </div>
            
            {/* banner image */}
            <Image src={graphic} width={100} height={100} alt="bannergraphic" className=" w-[643px]   absolute bottom-0 -right-[56px] object-cover   " />
 


        </div>

      </Container>
    </section>
  );
}
