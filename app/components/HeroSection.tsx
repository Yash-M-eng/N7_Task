"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./common/Button";
import Container from "./common/Container";


const logos = [
  { name: "Shells", src: "/logos/logo1.png", width: 72.08 },
  { name: "SmartFinder", src: "/logos/logo2.png", width: 91.7 },
  { name: "Zoomerr", src: "/logos/logo3.png", width: 78.2 },
  { name: "ArtVenue", src: "/logos/logo4.png", width: 88.4 },
  { name: "kontrast", src: "/logos/logo5.png", width: 80.2 },
  { name: "wavesmarathon", src: "/logos/logo6.png", width: 118.4 },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[720px] items-start overflow-hidden bg-[#000D12] pb-12 pt-[84px] min-[360px]:min-h-[760px] min-[360px]:pt-[92px] md:min-h-[760px] md:pt-[128px] lg:min-h-[811px] lg:pt-[204px]">
      <div className="pointer-events-none absolute top-[204.52px] left-[873.13px] h-[398.873px] w-[398.873px] rounded-full bg-[linear-gradient(103.43deg,#00B4FD_-1.02%,#003ACE_83.53%)] opacity-50 blur-[100px] max-lg:left-auto max-lg:right-[-8%] max-md:top-[350px] max-md:h-[300px] max-md:w-[300px]" />

      <Container className="relative z-10">
        <div className="grid items-start gap-10 min-[360px]:gap-14 lg:grid-cols-[520px_1fr] lg:gap-[72px]">
          <div className="z-20 flex min-w-0 flex-col items-start">
            <h1 className="mb-5 max-w-full translate-y-0 text-[30px] leading-[1.16] font-medium tracking-normal text-[#EAF2F8] opacity-100 transition duration-700 ease-out sm:text-[40px] md:text-[46px] lg:text-[52px]">
              The new foundation <br /> of modern banking
            </h1>

            <p className="mb-[34px] max-w-[330px] text-[10px] leading-[1.4] text-white/70 md:text-[11px] lg:text-[12px]">
              We drive innovation and growth, provide seamless customer
              experience and operational excellence
            </p>

            <div className="mb-10 flex w-full flex-col items-stretch gap-[13px] min-[360px]:mb-12 min-[420px]:flex-row sm:w-auto">
              <Button className="h-[34px] w-full min-w-0 rounded-[6px] px-6 py-0 text-[10px] sm:w-auto sm:min-w-[150px] lg:h-[38px] lg:min-w-[165px] lg:text-[11px]">
                Request demo
              </Button>
              <Button
                variant="outline"
                className="h-[34px] w-full min-w-0 rounded-[6px] px-6 py-0 text-[10px] sm:w-auto sm:min-w-[150px] lg:h-[38px] lg:min-w-[165px] lg:text-[11px]"
              >
                Contact us
              </Button>
            </div>

          </div>

          <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
  className="group/hero relative mx-auto mt-1 h-[176px] w-full max-w-[288px] min-[360px]:mt-2 min-[360px]:h-[198px] min-[360px]:max-w-[330px] sm:h-[250px] sm:max-w-[395px] md:h-[300px] lg:mx-0 lg:mt-0 lg:scale-[1.08]"
>
  
  <div className="absolute left-[34%] top-[-30px] h-[230px] w-[230px] rounded-full bg-[#0057FF]/35 blur-[82px]" />
  <div className="absolute left-[60%] top-[-8px] h-[140px] w-[140px] rounded-full bg-[#0EA5E9]/20 blur-[58px]" />

  <Image
    src="/images/P1.png"
    alt="Modern banking"
    width={365}
    height={300}
    priority
    quality={100}
    sizes="(max-width: 360px) 178px, (max-width: 640px) 246px, 365px"
    className="relative ml-[66px] aspect-[246/204] w-[178px] overflow-hidden rounded-[18px] border border-white/10 object-cover shadow-[0_26px_70px_rgba(0,0,0,0.28)] transition duration-500 ease-out group-hover/hero:-translate-y-1 group-hover/hero:scale-[1.015] min-[360px]:ml-[76px] min-[360px]:w-[205px] sm:ml-[79px] sm:w-[246px] lg:w-[365px] lg:rounded-[30px]"
  />

  
  <div className="absolute right-0 top-[12px] z-20 w-[104px] translate-x-[8px] opacity-80 blur-[0.3px] drop-shadow-[0_18px_35px_rgba(0,0,0,0.25)] transition duration-500 ease-out group-hover/hero:translate-x-3 group-hover/hero:-translate-y-1 group-hover/hero:opacity-90 min-[360px]:top-[14px] min-[360px]:w-[118px] sm:top-[15px] sm:w-[139px] lg:right-[-10px] lg:top-[-8px] lg:w-[250px]">
    <div className="mb-[9px] flex items-center gap-[6px]">
      <Image
  src="/images/Home1.png"
  alt="Balance Card"
  width={208}
  height={177}
  className="absolute right-0 top-[12px] z-20 w-[104px] translate-x-[8px] opacity-90 drop-shadow-[0_18px_35px_rgba(0,0,0,0.25)] transition duration-500 ease-out group-hover/hero:translate-x-3 group-hover/hero:-translate-y-1 group-hover/hero:opacity-100 min-[360px]:top-[14px] min-[360px]:w-[118px] sm:top-[15px] sm:w-[139px] lg:right-[-10px] lg:top-[-8px] lg:w-[250px]"
/>
      
    </div>
    </div>

  <Image
    src="/images/Home.png"
    alt="Recent activity"
    width={254}
    height={118}
    quality={100}
    className="absolute left-[8px] top-[72px] z-20 w-[124px] drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)] transition duration-500 ease-out group-hover/hero:-translate-y-3 group-hover/hero:-translate-x-1 group-hover/hero:scale-[1.055] min-[360px]:left-[10px] min-[360px]:top-[82px] min-[360px]:w-[142px] sm:left-0 sm:top-[102px] sm:w-[166px] lg:left-[-62px] lg:top-[142px] lg:w-[254px]"
  />
</motion.div>


        </div>

        <div className="mt-[42px] w-full lg:absolute lg:top-[451.06px] lg:left-[calc((100vw-1120px)/-2+80px)] lg:mt-0 lg:h-[55.398px] lg:w-[621.357px]">
          <p className="mb-[16px] h-[21px] w-[83px] text-[16px] leading-[130%] font-medium text-[#E9F4F9]/70 capitalize">
            Trusted By:
          </p>
          <div className="flex h-[18.398px] w-full flex-wrap items-center gap-x-[18.4px] gap-y-[10px] opacity-90 lg:flex-nowrap">
            {logos.map((logo) => (
              <Image
                alt={logo.name}
                className="h-[18.398px] w-auto object-contain transition duration-300 hover:opacity-100"
                height={18}
                key={logo.name}
                quality={100}
                src={logo.src}
                width={Math.round(logo.width)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
