import React from "react";

export default function FAQbtn({onClick, category, selectedCategory, setSelectedCategory}: any) {
  return (
    <button onClick={() => setSelectedCategory(category.id)} className={`px-6 lg:py-3 md:py-2 py-1 cursor-pointer  rounded-full font-urbanist  font-medium transition-all duration-300 border-2 ${selectedCategory === category.id ? "bg-[#2E68FD] text-[#FFFFFF] border-[#2E68FD] shadow-lg shadow-[#2E68FD]/25" : "bg-[#FFFFFF] text-[#374151] border-[#E5E7EB] hover:border-[#2E68FD]  " }`} >
      {category.name}
    </button>
  );
}
