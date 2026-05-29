import type { ReactNode } from "react";
import Button from "./common/Button";

const features = [
  "Customer-On Boarding",
  "Managing deposits and withdrawals",
  "Transaction management",
  "Interest Calculation",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
  "CRM Activities",
  "Configuring New Banking Products",
  "Loan disbursal and Loan management",
  "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
];

export default function CloudBankingSection() {
  return (
    <section className="relative overflow-hidden bg-[#000D12] py-20 md:py-32">
      
      <div className="relative z-10 bg-[url('/images/CB7.png')] bg-size-[930px] bg-left-top bg-no-repeat">
        
        
        <div className="mb-20 flex items-center justify-between gap-12 md:mb-[120px] lg:grid-cols-[0.86fr_1.14fr]">
          
         
          <div className="pt-[18px] pl-[80px]">
            <h2 className="max-w-full text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-[#EAF2F8] md:max-w-[455px] md:text-[34px]">
              A complete cloud-based core banking.
            </h2>

            <p className="mt-[14px] max-w-[255px] text-[10px] leading-[1.35] text-white/55">
              Faster time to market with our cloud-based core banking services.
            </p>

            <div className="mt-[26px] flex flex-col items-start gap-[11px]">
              <Button variant="primary" className="h-[34px] min-w-[141px] rounded-[6px] px-6 py-0 text-[9px]">
                REQUEST DEMO
              </Button>

              <LearnMoreButton />
            </div>
          </div>

         
          <div className="relative flex justify-center pt-0 lg:-mr-10 lg:justify-end">
            <LaptopFrame widthClass="w-full md:w-[520px]">
              <img
                src="/images/Dashboard.png"
                alt="AML Dashboard"
                className="h-full w-full object-contain"
              />
            </LaptopFrame>
          </div>
        </div>

    
        <div className="grid items-start gap-20 lg:grid-cols-[1.08fr_0.92fr]">
          
         
          <div className="relative flex justify-center pt-1 lg:-ml-[86px] lg:block">
            <LaptopFrame widthClass="w-full md:w-[560px]">
              <img
                src="/images/Dashboard1.png"
                alt="KYC Dashboard"
                className="h-full w-full object-contain"
              />
            </LaptopFrame>
          </div>

          {/* Right Content */}
          <div className="pt-[34px] lg:pr-14">
            <h3 className="mb-[26px] max-w-[455px] text-[18px] font-medium leading-[1.28] text-[#EAF2F8] md:text-[20px]">
              Run a more efficient, flexible,and digitally connected corebanking system
            </h3>

            <p className="mb-[13px] text-[10px] font-bold text-white">
              What you will get:
            </p>

            {/* Checklist Grid */}
            <div className="grid items-start gap-x-6 gap-y-[9px] sm:grid-cols-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-[7px]"
                >
                  <div className="mt-[2px] flex h-[10px] w-[10px] shrink-0 items-center justify-center rounded-full bg-[#0057FF] text-white shadow-lg shadow-blue-500/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-[6px] w-[6px]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <p className="text-[9px] leading-[1.35] text-white/55">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function LearnMoreButton() {
  return (
    <button className="group inline-flex items-center justify-center gap-2 text-center text-[10px] font-bold uppercase tracking-widest text-cyan-400 transition hover:text-cyan-300 focus-visible:outline-none">
      <span className="relative overflow-hidden pb-1">
        LEARN MORE
        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-300 group-hover:scale-x-0 group-focus-visible:scale-x-0 group-active:translate-x-full" />
        <span className="absolute bottom-0 left-0 h-px w-full -translate-x-full bg-current transition-transform duration-300 group-hover:translate-x-0 group-focus-visible:translate-x-0 group-active:translate-x-0" />
      </span>
      <span className="transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-1">→</span>
    </button>
  );
}

function LaptopFrame({
  children,
  widthClass,
}: {
  children: ReactNode;
  widthClass: string;
}) {
  return (
    <div className={`relative max-w-[calc(100vw-40px)] ${widthClass}`}>
      <div className="overflow-hidden rounded-t-[9px] border-[2px] border-[#03A9F4] bg-[#020B12] p-[5px] shadow-2xl shadow-blue-900/30">
        <div className="aspect-[1063/810] overflow-hidden bg-[#D6DCE0]">
          {children}
        </div>
      </div>
      <div className="relative left-1/2 h-[16px] w-[118%] -translate-x-1/2 rounded-b-[7px] border border-[#03A9F4] bg-[#001723]" />
    </div>
  );
}