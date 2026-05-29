"use client";

import Button from "./common/Button";

export function CTACard({ brand = "N7" }: { brand?: "CB7" | "N7" }) {
  return (
    <div className="relative left-1/2 flex min-h-[230px] w-[min(1080px,calc(100vw-40px))] -translate-x-1/2 flex-col items-center justify-between gap-10 overflow-hidden rounded-[14px] bg-[#000D12] px-8 py-[62px] text-white shadow-2xl shadow-blue-950/15 md:min-h-[354px] md:flex-row md:gap-[72px] md:px-[70px] lg:min-h-[455px] lg:gap-24 lg:px-[72px]">
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center overflow-hidden">
        <span className="translate-x-[6%] text-[285px] leading-none font-black text-transparent opacity-35 [-webkit-text-stroke:1.15px_rgba(0,87,255,0.42)] md:text-[465px] lg:text-[555px]">
          {brand}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(3,30,42,0.95)_0%,rgba(0,13,18,1)_52%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(0,180,253,0.18),transparent_34%)]" />

      <div className="relative z-10 max-w-[540px] flex-1 translate-x-0 opacity-100 transition duration-700 ease-out">
        <h2 className="mb-7 text-[30px] leading-[1.18] font-medium tracking-normal text-white md:text-[42px] lg:text-[43px]">
          <span className="whitespace-nowrap">Take the full advantage of</span>
          <br />
          going paper-less now.
        </h2>

        <p className="max-w-[410px] text-[7.5px] leading-relaxed text-white/55 md:text-[9px] lg:text-[9.5px]">
          {brand} helps your financial institution improve the client
          experience, automate and optimize procedures, simplify banking
          operations
        </p>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center justify-start gap-8 sm:flex-row md:w-auto md:justify-end">
        <Button
          variant="outline"
          className="h-[33px] w-full min-w-[154px] rounded-[7px] px-8 py-0 text-[7px] whitespace-nowrap sm:w-auto"
        >
          Contact us
        </Button>
        <Button className="h-[33px] w-full min-w-[154px] rounded-[7px] px-8 py-0 text-[7px] whitespace-nowrap shadow-lg sm:w-auto">
          Request demo
        </Button>
      </div>
    </div>
  );
}

export default function CTASection({
  brand = "N7",
}: {
  brand?: "CB7" | "N7";
}) {
  return (
    <section className="mx-[calc(50%-50vw)] overflow-hidden bg-[#000D12] py-16 md:py-[86px]">
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">
        <CTACard brand={brand} />
      </div>
    </section>
  );
}
