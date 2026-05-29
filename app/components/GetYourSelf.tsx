// "use client";

// import { motion } from "framer-motion";

// const CaseVector = () => {
//   return (
//     <div className="relative flex aspect-square w-[210px] shrink-0 items-center justify-center rounded-[8px] bg-[#071C49] p-[18px]">

//       <img src={"images/caseVector.png"}/>
//     </div>
//   );
// };

// function ReadMoreButton({ className = "" }: { className?: string }) {
//   return (
//     <button className={`inline-flex items-center justify-center rounded-[5px] border border-white/40 px-12 py-[8px] text-center text-[8px] font-medium uppercase tracking-wider text-white/45 transition hover:border-white/70 hover:text-white ${className}`}>
//       READ MORE
//     </button>
//   );
// }

// function ReadAllInsights() {
//   return (
//     <button className="group flex items-center justify-center gap-1.5 text-center text-[9px] font-bold uppercase tracking-widest text-[#00B4FD] transition hover:text-cyan-300">
//       <span className="relative overflow-hidden pb-1">
//         READ ALL INSIGHTS
//         <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
//       </span>
//       <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
//     </button>
//   );
// }

// export default function FintechSection() {
//   return (
//     <section className="relative overflow-hidden bg-[#000D12] py-20 text-white md:py-24 ">
//       <div className="container-width relative z-10 max-w-[980px]">

//         <div className="grid items-start gap-12 lg:grid-cols-[310px_1fr] lg:ml-[80px]">


// <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.7 }}
//   className="flex h-fit w-full max-w-[463px] flex-col gap-[48px]"
// >
//   <h2 className="max-w-[463px] text-[30px] font-normal leading-[120%] tracking-[-0.01em] text-[#EAF2F8] lg:text-[37px]">
//     Get yourself up-to-speed on all the things happening in fintech
//   </h2>

//   <button className="flex h-[49px] w-fit items-center justify-center rounded-[10px] border border-white/70 px-[59px] text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10">
//     INSIGHTS
//   </button>
// </motion.div>



//           <div className="flex flex-col gap-6">


//             <motion.div 
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="flex flex-col items-center gap-5 rounded-[12px] bg-[#021A22]/80 p-5 shadow-xl transition-all duration-300 hover:bg-[#03212B]/90 md:flex-row md:items-stretch"
//             >

//               <CaseVector />

//               <div className="flex flex-1 flex-col items-start justify-between gap-7 py-2">
//                 <div>
//                   <span className="text-[8px] font-semibold uppercase tracking-widest text-[#00B4FD]/70">
//                     GETTING STARTED
//                   </span>

//                   <h3 className="mt-5 max-w-[260px] text-[18px] font-medium leading-[1.15] tracking-tight text-white transition hover:text-[#00B4FD] md:text-[20px]">
//                     How to transition from a traditional to a digital bank
//                   </h3>

//                   <div className="mt-4 flex items-center gap-3 text-[8px] text-white/45">
//                     <span className="text-[#00B4FD]/80">David Grohl</span>
//                     <span>17/08/24</span>
//                   </div>
//                 </div>

//                 <ReadMoreButton className="w-full" />
//               </div>
//             </motion.div>


//             <div className="grid gap-6 md:grid-cols-2">
//               {[1, 2].map((cardId) => (
//                 <motion.div 
//                   key={cardId}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.8, delay: cardId * 0.1 }}
//                   className="flex min-h-[190px] flex-col justify-between gap-6 rounded-[10px] bg-[#021A22]/80 p-5 shadow-lg transition-all duration-300 hover:bg-[#03212B]/90"
//                 >
//                   <div>
//                     <span className="text-[8px] font-semibold uppercase tracking-widest text-[#00B4FD]/70">
//                       GETTING STARTED
//                     </span>

//                     <h4 className="mt-5 max-w-[210px] text-[18px] font-medium leading-[1.05] tracking-tight text-white transition hover:text-[#00B4FD]">
//                       How to transition from a traditional to a digital bank
//                     </h4>

//                     <div className="mt-4 flex items-center gap-3 text-[8px] text-white/45">
//                       <span className="text-[#00B4FD]/80">David Grohl</span>
//                       <span>17/08/24</span>
//                     </div>
//                   </div>

//                   <div className="flex">
//                     <ReadMoreButton className="w-full" />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="flex justify-end">
//               <ReadAllInsights />
//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

const CaseVector = () => {
    return (
        <div className="relative flex aspect-square w-[210px] shrink-0 items-center justify-center rounded-[8px] bg-[#071C49] p-[18px]">
            <img src={"images/caseVector.png"} />
        </div>
    );
};

function ReadMoreButton({ className = "" }: { className?: string }) {
    return (
        <button className={`inline-flex items-center justify-center rounded-[5px] border border-white/40 px-12 py-[8px] text-center text-[8px] font-medium uppercase tracking-wider text-white/45 transition hover:border-white/70 hover:text-white ${className}`}>
            READ MORE
        </button>
    );
}

function ReadAllInsights() {
    return (
        <button className="group flex items-center justify-center gap-1.5 text-center text-[9px] font-bold uppercase tracking-widest text-[#00B4FD] transition hover:text-cyan-300">
            <span className="relative overflow-hidden pb-1">
                READ ALL INSIGHTS
                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
    );
}

export default function FintechSection() {
    return (
        <section className="relative overflow-hidden bg-[#000D12] py-20 text-white md:py-24">

            <div className="relative z-10 mx-auto max-w-[1200px] px-10 gap-10">
                <div className="grid items-start gap-[90px] lg:grid-cols-[310px_670px]">


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex h-fit w-full max-w-[310px] flex-col gap-[48px]"
                    >
                        <h2 className="font-[Archivo] text-[37px] font-normal leading-[120%] tracking-[-0.01em] text-[#EAF2F8] lg:text-[37px]">
                            Get yourself up-to-speed on all the things happening in fintech
                        </h2>

                        <button className="flex h-[49px] w-fit items-center justify-center rounded-[10px] border border-white/70 px-[59px] text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10">
                            INSIGHTS
                        </button>
                    </motion.div>


                    <div className="flex flex-col gap-6">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center gap-5 rounded-[12px] bg-[#021A22]/80 p-5 shadow-xl transition-all duration-300 hover:bg-[#03212B]/90 md:flex-row md:items-stretch"
                        >
                            <CaseVector />

                            <div className="flex flex-1 flex-col items-start justify-between gap-7 py-2">
                                <div>
                                    <span className="text-[8px] font-semibold uppercase tracking-widest text-[#00B4FD]/70">
                                        GETTING STARTED
                                    </span>
                                    <h3 className="mt-5 max-w-[260px] text-[18px] font-medium leading-[1.15] tracking-tight text-white transition hover:text-[#00B4FD] md:text-[20px]">
                                        How to transition from a traditional to a digital bank
                                    </h3>
                                    <div className="mt-4 flex items-center gap-3 text-[8px] text-white/45">
                                        <span className="text-[#00B4FD]/80">David Grohl</span>
                                        <span>17/08/24</span>
                                    </div>
                                </div>
                                <ReadMoreButton className="w-full" />
                            </div>
                        </motion.div>

                        {/* Small cards */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {[1, 2].map((cardId) => (
                                <motion.div
                                    key={cardId}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: cardId * 0.1 }}
                                    className="flex min-h-[190px] flex-col justify-between gap-6 rounded-[10px] bg-[#021A22]/80 p-5 shadow-lg transition-all duration-300 hover:bg-[#03212B]/90"
                                >
                                    <div>
                                        <span className="text-[8px] font-semibold uppercase tracking-widest text-[#00B4FD]/70">
                                            GETTING STARTED
                                        </span>
                                        <h4 className="mt-5 max-w-[210px] text-[18px] font-medium leading-[1.05] tracking-tight text-white transition hover:text-[#00B4FD]">
                                            How to transition from a traditional to a digital bank
                                        </h4>
                                        <div className="mt-4 flex items-center gap-3 text-[8px] text-white/45">
                                            <span className="text-[#00B4FD]/80">David Grohl</span>
                                            <span>17/08/24</span>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <ReadMoreButton className="w-full" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex justify-end">
                            <ReadAllInsights />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}