"use client";
import React, { use, useRef } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


// components
import Container from '@/src/components/common/Container'
import SectionHead from '@/src/components/common/SectionHead' 
import SliderBtbGroup from '@/src/components/customes/SliderBtbGroup';
import SupportCard from './SupportCard';

type Props = {}

export default function Support({}: Props) {


    const businessType = [
        {
            title: "SaaS",
            text: "Quickly launch and grow recurring revenue with a unified platform for payments, subscriptions, invoicing, tax, accounting, and more.",
        },
        {
            title: "Marketplace",
            text: "Get everything you need to onboard service providers, manage multiparty payments, and send payouts, all in one place.",
        },
        {
            title: "Embedded finance",
            text: "Distribute financial accounts, commercial cards, and lending to create tailored in-product experiences for your customers.",
        },
        {
            title: "Ecommerce",
            text: "Access an optimized suite of tools to accept payments online and in person from customers around the world.",
        },
        {
            title: "Crypto",
            text: "Embed crypto purchases directly into your checkout flow—with fraud prevention and authorization optimization built in.",
        },
        {
            title: "Creator economy",
            text: "Quickly onboard and pay out creators globally with prebuilt UIs, or build your own custom solution.",
        },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const supportSliderRef = useRef<any>(null);

  return (
    <section className=' lg:py-30 md:py-20 py-15 bg-[#f6f9fc]    '>
        

        <Container>

            {/* header */}
            <div className="md:flex justify-between items-end md:px-5 lg:px-0   ">
                
                {/* head txt */}
                <div className="">

                    <SectionHead title="Support types" subtitle="Support for any business type" subtitleStyle="text-[#01081B] " customeStyle="text-center md:text-left" />
                    <p className=" cnmPeragraph mt-5 md:mt-7  max-w-[550px] text-center md:text-left  ">
                        From global e-commerce companies to category-defining marketplaces, successful businesses across industries grow and scale with Easy Pay.
                    </p>
                </div>

                {/* slider btn */}
                <SliderBtbGroup next={() => supportSliderRef.current?.next()} previous={() => supportSliderRef.current?.previous()} />

            </div>


            {/* slider */}
            <div className="lg:mt-20 md:mt-15 mt-10">

                <Carousel responsive={responsive} arrows={false} ref={supportSliderRef} infinite={true}  >
                    {businessType.map((item, index) => <SupportCard key={index} title={item.title} text={item.text}   /> )}
                </Carousel>
            </div>


        </Container>


    </section>
  )
}