import React from 'react'
import Container from '../components/common/Container'
import Image from 'next/image'

// images
import logo from "../assets/images/logo.png"
import Link from 'next/link'

export default function NavBar() {

    const navItems = ["Features", "Pricing", "Security", "Benifits" ]   
  return (
    <nav>
        <Container>
            
            <div className="flex items-center justify-between  ">

                {/* logo */}
                <Image src={logo} width={100} height={100} alt="logo" />


                {/* nav items */}
                <ul className='flex gap-8 font-semibold text-lg text-[#4D525F] '>
                    {
                        navItems.map((item, index) => (
                            <li key={index}>
                                <Link href="#" className=' font-urbanist   '  >{item}</Link>
                            </li>
                        ))
                    }
                </ul>


                {/* contact btn */}
                <button className='py-3 px-6 leading-[150%] rounded-[25px] bg-[#2E68FD] text-white font-semibold text-lg font-outfit '>Contact Us</button>

            </div>
        </Container>
    </nav>
  )
}
