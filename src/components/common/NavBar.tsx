"use client";
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
    <nav
      className={` w-full fixed  left-0 z-10 transition-all ease-in-out duration-300    ${
        isScrolled
          ? "bg-[radial-gradient(circle_at_top_left,_#dfe7ff_0%,_#fffbe7_40%,_#f2e5ff_100%)] top-0 py-[20px]"
          : "bg-transparent top-6 py-[36.5px] "
      }  `}
    >
      <Container>
        <div className="flex items-center justify-between  ">
          {/* logo */}
          <Image src={logo} width={100} height={100} alt="logo" />

          {/* nav items */}
          <ul className="flex gap-8 font-semibold text-lg text-[#4D525F] ">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href="#" className=" font-urbanist   ">
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* contact btn */}
          <button className="py-3 px-6 h-fit leading-[150%] rounded-[25px] bg-[#2E68FD] text-white font-semibold text-lg font-outfit ">Contact Us</button>

        </div>
      </Container>
    </nav>
  );
}
