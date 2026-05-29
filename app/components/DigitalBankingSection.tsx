"use client";

import { motion } from "framer-motion";
import Button from "./common/Button";
import { CTACard } from "./CTASection";


const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <div className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#0057FF] text-white shadow-md shadow-blue-500/20">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-2 w-2">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    <span className="text-[11px] font-semibold text-[#000D12]">{text}</span>
  </div>
);

export default function DigitalBankingSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#E9F4F9] py-16 md:py-20 bg-[url('/images/BGVector.png')] bg-size-[280px] bg-[position:left_center] bg-no-repeat">
        <div className="page-center-nudge relative z-10 mx-auto w-full max-w-[1120px] flex flex-col gap-12 px-5 md:px-0 bg-[url('/images/N7_Letter.png')] bg-size-[680px] bg-[position:center_top] bg-no-repeat">
          
      
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-[32px]">
           
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex w-full max-w-[210px] flex-col items-start justify-self-start pt-1 text-left"
            >
              <h2 className="text-[53px] font-medium leading-[1.08] tracking-tight text-[#000D12] md:text-[29px]">
                Digital banking <br />
                out-of-the-box
              </h2>
              
              <p className="mt-3 max-w-[205px] text-[8px] leading-relaxed text-[#000D12]/70 md:text-[8.5px]">
                N7 helps your financial institution improve the client experience, 
                automate and optimize procedures
              </p>
              
              <div className="mt-5 flex w-full flex-col items-center gap-6 sm:w-auto sm:flex-row">
                <Button 
                  variant="primary"
                  className="h-[28px] w-full rounded-[4px] px-6 py-0 text-[7px] shadow-xl shadow-blue-500/20 sm:w-auto"
                >
                  REQUEST DEMO
                </Button>
              </div>
              
              <button className="group mt-3 inline-flex items-center justify-center text-center text-[8px] font-bold uppercase tracking-widest text-[#0057FF] transition hover:text-blue-700">
                LEARN MORE <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>

            <div className="flex flex-col gap-[110px]">
              <div className="flex items-center justify-center gap-[80px]">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center"
                >
                <img
                  src="/images/iPhone1.png"
                  alt="Banking App Home"
                  className="h-auto w-[176px] object-contain"
                />
                </motion.div>

             
                <motion.div 
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-full max-w-[230px] text-left"
                >
                  <h3 className="max-w-[190px] text-[11px] font-semibold leading-[1.25] tracking-tight text-[#000D12] md:text-[12px]">
                    Fully compliant with regulatory requirement
                  </h3>
                  
                  <p className="mt-3 max-w-[205px] text-[8.5px] leading-relaxed text-[#000D12]/70">
                    The governance of risk management with regulations is achieved by our risk management 
                    framework that is fully integrated to work with digital bank&apos;s operational-risk protocols 
                    and procedures.
                  </p>

                  <div className="mt-5 w-full space-y-2">
                    <CheckItem text="Pre-integrated Security System" />
                    <CheckItem text="Fully Compliant With Regulatory Requirement" />
                    <CheckItem text="Digitally Connected Core" />
                  </div>
                </motion.div>
              </div>
              <div className="flex items-center justify-center gap-[80px]">
                
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="w-full max-w-[210px] md:col-start-2"
                    >
                      <h3 className="text-[12px] font-semibold leading-[1.25] tracking-tight text-[#000D12]">
                        No legacy IT systems
                      </h3>
                      
                      <p className="mt-3 text-[8.5px] leading-relaxed text-[#000D12]/70">
                        Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
                      </p>
                      
                      <div className="mt-5 w-full space-y-2">
                        <CheckItem text="Adaptive & Intelligent API monetization" />
                        <CheckItem text="Ambient User Experience" />
                        <CheckItem text="Cloud-native With lower TCO" />
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="flex justify-center md:col-start-3 md:justify-start md:pt-0"
                    >
                      <img
                        src="/images/iPhone2.png"
                        alt="Banking App Analytics"
                        className="h-auto w-[176px] object-contain"
                      />
                    </motion.div>
              </div>
              <div className="flex items-center justify-center gap-[80px]">
                 
                  <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:col-start-2 md:justify-start"
                  >
                    <img
                      src="/images/iPhone3.png"
                      alt="Banking App Profile"
                      className="h-auto w-[176px] object-contain"
                    />
                  </motion.div>

                 
                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="w-full max-w-[225px] md:col-start-3"
                  >
                    <h3 className="text-[12px] font-semibold leading-[1.25] tracking-tight text-[#000D12]">
                      No traditional branches
                    </h3>
                    
                    <p className="mt-3 text-[8.5px] leading-relaxed text-[#000D12]/70">
                      Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
                    </p>
                    
                    <div className="mt-5 w-full space-y-2">
                      <CheckItem text="Branchless & Paperless Banking" />
                      <CheckItem text="Digital Transformation Capability" />
                      <CheckItem text="Optimized, Adoptable and Scalable" />
                    </div>
                  </motion.div>
              </div>
            </div>
          </div>

         

        </div>
      </section>
      <section className="relative bg-[#E9F4F9] py-16 md:py-20 bg-[url('/images/FullBG.png')] bg-contain bg-[position:left_center] bg-no-repeat">
           <CTACard brand="N7" />
      </section>
    </>
  );
}
