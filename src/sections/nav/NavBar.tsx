'use client'
import React, { useEffect, useState } from "react";
import Container from "../../components/common/Container";
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
    <nav className={`py-[36.5px] w-full fixed top-0 left-0 z-10 ${ isScrolled ? "bg-[radial-gradient(circle_at_top_left,_#dfe7ff_0%,_#fffbe7_40%,_#f2e5ff_100%)]" : "bg-transparent"}  `}>
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
          <button className="py-3 px-6 leading-[150%] rounded-[25px] bg-[#2E68FD] text-white font-semibold text-lg font-outfit ">
            Contact Us
          </button>
        </div>
      </Container>
    </nav>
  );
}
