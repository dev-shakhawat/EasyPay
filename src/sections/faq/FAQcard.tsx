"use client";
import { motion, useInView } from "framer-motion";
import React from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

type Props = {
    isInView: boolean;
    faq: {
        id: number;
        question: string;
        answer: string;
    };
    toggleFAQ: (index: number) => void;
    activeIndex: number | null;
    index: number;
};

export default function FAQcard({isInView,faq,toggleFAQ,activeIndex,index}: Props) {
  return (
    <motion.div key={faq.id} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#F3F4F6] overflow-hidden hover:shadow-md transition-all duration-300">
      <button onClick={() => toggleFAQ(index)} className=" cursor-pointer   w-full px-8 py-6 text-left flex justify-between items-center hover:bg-[#F9FAFB] transition-colors duration-200">
        <h3 className="text-lg font-semibold text-[#111827] pr-4 cmnHeadingtwo   ">
          {faq.question}
        </h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${ activeIndex === index ? "bg-[#2E68FD] text-[#FFFFFF]" : "bg-[#F3F4F6] text-[#4B5563]" }`} >
          {activeIndex === index ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </div>
      </button>

      <motion.div initial={false} animate={{ height: activeIndex === index ? "auto" : 0, opacity: activeIndex === index ? 1 : 0, }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden" >
        <div className="px-8 pb-6 pt-2">

          <p className="text-[#4B5563] cnmPeragraph leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
