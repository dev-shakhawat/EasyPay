"use client";
import { motion , useInView } from "framer-motion";
import React, { useRef } from "react";
import dynamic from "next/dynamic";


// components
import Container from "@/src/components/common/Container";
import SectionHead from "@/src/components/common/SectionHead";

// icon
import { IoIosArrowBack } from "react-icons/io";

// slider
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import test1 from "../../assets/images/test1.png";
import test2 from "../../assets/images/test2.png";
import pricingShap from "../../assets/images/pricingShap.png";
import Image from "next/image";
const TestimonialCard = dynamic(() => import("./TestimonialCard"), { ssr: false });

const ButtonGroup = ({ next, previous }: any) => {
  return (
    <div className="flex items-center gap-2 mt-10  ">
      {/* prev button */}
      <button
        onClick={() => previous()}
        type="button"
        className=" group border border-[#CFD0D1] hover:border-[#01081B] hover:bg-[#01081B] w-[56px] h-[56px] rounded-full grid place-items-center  duration-300 cursor-pointer  "
      >
        <IoIosArrowBack className="duration-300 text-2xl text-[#4D525F] group-hover:text-[#FFFFFF] " />
      </button>

      {/* next button */}
      <button
        onClick={() => next()}
        type="button"
        className=" group border border-[#CFD0D1] hover:border-[#01081B] hover:bg-[#01081B] w-[56px] h-[56px] rounded-full grid place-items-center  duration-300 cursor-pointer rotate-[180deg]  "
      >
        <IoIosArrowBack className="duration-300 text-2xl text-[#4D525F] group-hover:text-[#FFFFFF] " />
      </button>
    </div>
  );
};

export default function Testimonial() {
  const allTestimonials = [
    {
      id: 1,
      stars: 5,
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
      name: "Ethan Williams",
      job: "Digital Marketing Specialist",
      image: test1.src,
    },
    {
      id: 2,
      stars: 5,
      text: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
      name: "Daniel Thompson",
      job: "Product Designer",
      image: test2.src,
    }, 
    {
      id: 1,
      stars: 5,
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
      name: "Ethan Williams",
      job: "Digital Marketing Specialist",
      image: test1.src,
    },
    {
      id: 2,
      stars: 5,
      text: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
      name: "Daniel Thompson",
      job: "Product Designer",
      image: test2.src,
    }, 
    {
      id: 1,
      stars: 5,
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
      name: "Ethan Williams",
      job: "Digital Marketing Specialist",
      image: test1.src,
    },
    {
      id: 2,
      stars: 5,
      text: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
      name: "Daniel Thompson",
      job: "Product Designer",
      image: test2.src,
    }, 
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.previous();
  };

  const testimonialRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(testimonialRef, { margin: "-100px" });

  return (
    <section ref={testimonialRef} className="bg-[#F6F6F6] py-30 overflow-hidden  ">
      <Container>
        {/* header */}
        <div className="flex">
          <div className="">

            <motion.div initial={{ opacity: 0 , x:-50 }} animate={{ opacity: isInView ? 1 : 0 , x: isInView ? 0 : -50 }} transition={{ duration: 1 , delay: 0.2 }}  > 
              <SectionHead title="Testimonial" subtitle="We’ve build trust with reviews from real users" customeStyle="  " subtitleStyle="max-w-[490px]  " />

            <p className=" font-outfit font-normal text-base leading-[150%] text-[#4D525F] mt-3 max-w-[461px]   ">
              Boost your credibility by featuring genuine testimonials from real
              users, showcasing their positive experiences and satisfaction with
              Monks Pay services.
            </p>
            </motion.div>

            {/* slider button */}
            <motion.div initial={{ opacity: 0 , x:50 }} animate={{ opacity: isInView ? 1 : 0 , x: isInView ? 0 : 50 }} transition={{ duration: 1 , delay: 0.4 }}   > 
              <ButtonGroup next={handleNext} previous={handlePrev} />
            </motion.div>
          </div>

          {/* slider */}
          <div className="relative ml-[160px]  ">

            <div className="absolute top-0 left-0 w-[100vw] h-full     ">

            {/* shap */}
            <Image src={pricingShap} width={100} height={100} alt={pricingShap.src} className="  w-[500px] h-[500px] absolute -top-[100px] left-70     " />

              <Carousel
                ref={carouselRef}
                responsive={responsive} 
                infinite={true}
                ssr={false}
                autoPlay={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                arrows={false}
              >
                {allTestimonials.map((item) => (
                  <div key={item.id}>
                    <TestimonialCard
                      stars={item.stars}
                      text={item.text}
                      name={item.name}
                      job={item.job}
                      image={item.image}
                    />
                  </div>
                ))}  
                {/* <div className="">sdf</div>
                <div className="">sdf</div>
                <div className="">sdf</div> */}
              </Carousel> 
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
