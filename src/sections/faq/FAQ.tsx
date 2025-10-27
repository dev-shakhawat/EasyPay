"use client";
import { motion, useInView } from "framer-motion";
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

// components
import Container from '@/src/components/common/Container';
import SectionHead from '@/src/components/common/SectionHead';
import FAQbtn from "./FAQbtn";
import FAQcard from "./FAQcard";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {


  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How do I create an Easy Pay account?",
      answer: "Creating an Easy Pay account is simple. Download our app from the App Store or Google Play, click 'Sign Up', and provide your email address, phone number, and create a secure password. Verify your email and phone number, and you're ready to start using Easy Pay.",
      category: "account"
    },
    {
      id: 2,
      question: "Is Easy Pay secure for online transactions?",
      answer: "Yes, absolutely. Easy Pay uses bank-level 256-bit encryption, two-factor authentication, and real-time fraud monitoring. Your financial data is protected with the highest security standards, and we're PCI DSS compliant.",
      category: "security"
    },
    {
      id: 3,
      question: "What payment methods does Easy Pay support?",
      answer: "Easy Pay supports various payment methods including credit/debit cards (Visa, MasterCard, American Express), bank transfers, digital wallets, and in some regions, cryptocurrency. We continuously add new payment options to enhance convenience.",
      category: "payments"
    },
    {
      id: 4,
      question: "Are there any fees for using Easy Pay?",
      answer: "Basic personal accounts are free for most transactions. Business accounts and premium features may have minimal fees. We're transparent about all charges - you can view our complete fee structure in the app or on our website.",
      category: "fees"
    },
    {
      id: 5,
      question: "How long do transfers take to process?",
      answer: "Most transfers are instant. Bank transfers typically take 1-2 business days, while international transfers may take 2-5 business days depending on the destination country and banking regulations.",
      category: "transfers"
    },
    {
      id: 6,
      question: "Can I use Easy Pay for business transactions?",
      answer: "Yes! Easy Pay offers dedicated business solutions with features like bulk payments, invoicing, payment tracking, and integration with popular accounting software. Our business accounts are designed to streamline your financial operations.",
      category: "business"
    },
    {
      id: 7,
      question: "What happens if I enter wrong recipient details?",
      answer: "We have multiple verification steps to prevent errors. If a transfer is sent to incorrect details, contact our 24/7 support immediately. We'll work with the receiving institution to recover funds, though recovery isn't always guaranteed.",
      category: "support"
    },
    {
      id: 8,
      question: "Does Easy Pay work internationally?",
      answer: "Yes, Easy Pay supports international transfers to over 150 countries. We offer competitive exchange rates and low transfer fees. Check our app for specific country availability and exchange rates.",
      category: "international"
    }
  ];

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "account", name: "Account" },
    { id: "security", name: "Security" },
    { id: "payments", name: "Payments" },
    { id: "fees", name: "Fees & Limits" },
    { id: "business", name: "Business" }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const filteredFaqs = selectedCategory === "all" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(faqRef, { margin: "-100px" });

  return (
    <section id="faq" ref={faqRef} className='lg:mt-30 md:mt-25 sm:mt-20 mt-15 px-5 xl:px-0 overflow-hidden bg-gradient-to-br from-[#E0F2FE] via-[#FFFFFF] to-[#E0E7FF] py-30'>
      <Container>


        {/* Section Heade */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8 }} className="text-center mb-16" >
          <SectionHead  title="Frequently Asked Questions"  subtitle="Find quick answers to common questions about Easy Pay" customeStyle="flex flex-col items-center" subtitleStyle="xl:max-w-[600px] lg:max-w-[500px] md:max-w-[400px] text-center mx-auto" />
        </motion.div>

   
        {/* all button */}
        <motion.div  initial={{ opacity: 0, y: 30 }}  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mb-12" >
          {categories.map((category) =>  <FAQbtn key={category.id} category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />)}
        </motion.div>
  

        {/* FAQ Grid */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.8, delay: 0.4 }} className="max-w-4xl mx-auto"  >
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => <FAQcard key={faq.id} isInView={isInView} faq={faq} toggleFAQ={toggleFAQ} activeIndex={activeIndex} index={index} />)}
          </div>
        </motion.div>
 
 
        {/* Additional Help  */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-center mt-16" >
          
          <div className="bg-gradient-to-r from-[#2E68FD] to-[#1E40AF] rounded-3xl p-8 text-[#FFFFFF] shadow-xl shadow-[#2E68FD]/25 max-w-2xl mx-auto">
            <h3 className="text-2xl font-urbanist font-bold leading-[120%] mb-4">Still have questions?</h3>
            <p className="text-[#DBEAFE] font-outfit font-normal leading-[150%] mb-6 max-w-md mx-auto">
              Our support team is here to help you 24/7 with any questions about Easy Pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#FFFFFF] text-[#2E68FD]  cursor-pointer  font-semibold font-urbanist px-8 py-3 rounded-full hover:bg-[#F9FAFB] transition-colors duration-300 shadow-lg">
                Contact Support
              </button>
              <button className="border-2 cursor-pointer   border-[#FFFFFF] text-[#FFFFFF] font-semibold px-8 py-3 rounded-full hover:bg-[#FFFFFF] hover:text-[#2E68FD] transition-all duration-300">
                Live Chat
              </button>
            </div>
          </div>

        </motion.div>


      </Container>
      
    </section>
  );
}