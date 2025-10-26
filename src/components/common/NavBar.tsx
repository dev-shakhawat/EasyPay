"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";

// images
import logo from "../../assets/images/logo.png";

// icons
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function NavBar() {
  const navItems = [{name: "Features" , url: "/#features"}, {name: "Pricing" , url: "/#pricing"}, {name: "Security" , url: "/#security"}, {name: "Benefits" , url: "/#benefits"} ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(()=> {
      window.addEventListener("scroll", () => { setIsMenuOpen(false); })

      return () => { window.removeEventListener("scroll", () => { setIsMenuOpen(false); }) }
  } , [])

  return (
    <motion.nav initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className={`w-full px-2 lg:px-5 xl:px-0 fixed left-0 z-50 transition-all ease-in-out duration-300    ${ isScrolled
          ? "bg-[radial-gradient(circle_at_top_left,_#dfe7ff_0%,_#fffbe7_40%,_#f2e5ff_100%)] top-0 shadow-sm lg:py-5 md:py-3 py-2   "
          : "bg-transparent top-6 lg:py-9 md:py-5 sm:py-3 py-2    "  }`} >
      <Container>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
             <Image src={logo} width={100} height={100} alt="logo" priority />
          </Link>

          {/* nav items */}
          <ul className="lg:flex hidden gap-10">
            {navItems.map((item, index) => ( 

              <li key={index}>
                <Link  href={`${item.url}`}
                  className="font-urbanist font-semibold text-lg text-[#4D525F] hover:text-[#2E68FD] transition-colors duration-200" > {item.name} </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button  */}
          <button className="lg:flex hidden py-3 px-6 h-fit leading-[150%] rounded-[25px] bg-[#2E68FD] text-white font-semibold text-base font-outfit hover:bg-[#1d50c7] transition-colors duration-200"> Contact Us </button>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#4D525F] focus:outline-none cursor-pointer   " >
              {isMenuOpen ? (
                <IoCloseOutline className="text-3xl" />
              ) : (
                <CiMenuFries className="text-3xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <motion.div  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}  exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-4 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 absolute top-11 left-0 w-full" >
            <ul className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={`${item.url}`}  className="font-urbanist font-semibold text-base text-[#4D525F] hover:text-[#2E68FD] transition-colors duration-200" onClick={() => setIsMenuOpen(false)} > {item.name} </Link>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-3 px-6 rounded-[25px] bg-[#2E68FD] text-white font-semibold font-outfit text-sm">
              Contact Us
            </button>
          </motion.div>
        )}
      </Container>
    </motion.nav>
  );
}