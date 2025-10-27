"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  isInView: boolean;
  stat: {
    id: number;
    number: string;
    label: string;
    suffix: string;
  };
  index: number;
};

export default function ScaleCard({isInView , stat , index}: Props) {
  return (
    <motion.div  initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
     
      <div className="flex items-baseline gap-1">
        <h3 className="cmnHeadingtwo">{stat.number}</h3>

        {stat.suffix && <span className="text-lg text-gray-600">{stat.suffix}</span>}
      </div>
      <p className="cnmPeragraph mt-3">{stat.label}</p>

    </motion.div>
  );
}
