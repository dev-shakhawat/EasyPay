"use client"; 
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";

// images
import logo from "../../assets/images/logo.png";
import Link from "next/link"; 

export default function NavBar() {
  const navItems = ["Features", "Pricing", "Security", "Benifits"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className={` w-full fixed  left-0 z-10 transition-all ease-in-out duration-300    ${
        isScrolled
          ? "bg-[radial-gradient(circle_at_top_left,_#dfe7ff_0%,_#fffbe7_40%,_#f2e5ff_100%)] top-0 py-[20px]"
          : "bg-transparent top-6 py-[36.5px] "
      }  `}
    >
      <Container>
        <div className="flex items-center justify-between  flex-wrap md:flex-nowrap gap-4 md:gap-0 px-4 sm:px-6 md:px-8 ">
          {/* logo */}
          <Image src={logo} width={100} height={100} alt="logo" className="w-[80px] sm:w-[90px] md:w-[100px] h-auto" />

          {/* nav items */}
          <ul className="flex gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center md:justify-start">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href="#" className=" font-urbanist font-semibold text-sm sm:text-base md:text-lg text-[#4D525F]    ">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* contact btn */}
          <button className="py-2 sm:py-2.5 md:py-3 px-4 sm:px-5 md:px-6 h-fit leading-[150%] rounded-[20px] sm:rounded-[22px] md:rounded-[25px] bg-[#2E68FD] text-white font-semibold text-sm sm:text-base font-outfit ">Contact Us</button>

        </div>
      </Container>
    </motion.nav>
  );
}
