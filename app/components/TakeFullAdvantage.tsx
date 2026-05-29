"use client";

import { motion } from "framer-motion";

export default function MarqueeSection() {

  
  const textItems = Array.from({ length: 10 }).map((_, i) => (
    <div key={i} className="mx-4 flex items-center gap-5 whitespace-nowrap md:mx-5 md:gap-6">
      <span className="text-[26px] font-bold text-[#0057FF] md:text-4xl">N7</span>
      <Starburst />
      <span className="text-[26px] font-bold text-black tracking-tight md:text-4xl">Say</span>
      <span className="text-[26px] md:text-4xl">🖐️</span>
      <span className="text-[26px] font-bold text-black tracking-tight md:text-4xl">to the new way of banking</span>
      <Starburst />
      <span className="text-[26px] font-bold text-[#0057FF] md:text-4xl">CB7</span>
      <Starburst />
      <span className="text-[26px] font-bold text-black tracking-tight md:text-4xl">Say</span>
    </div>
  ));

  return (
    <section className="overflow-hidden bg-white py-4 md:py-5">
      <div className="relative flex w-full">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
          className="flex items-center"
        >
          {textItems}
          {textItems} 
        </motion.div>
      </div>
    </section>
  );
}

function Starburst() {
  return (
    <svg
      className="h-8 w-8 shrink-0 text-[#A9AFB4] md:h-10 md:w-10"
      viewBox="0 0 52 52"
      fill="none"
      aria-hidden="true"
    >
      <path d="M26 2v48M26 2v48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 26H2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M43 9 9 43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M9 9 43 43" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="26" cy="26" r="3" fill="currentColor" />
    </svg>
  );
}