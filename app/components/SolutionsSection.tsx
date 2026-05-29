import Button from "./common/Button";
import Image from "next/image";
import Container from "./common/Container";

const solutions = [
  {
    icon: "core",
    title: "Core Banking CB7",
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: "digital",
    title: "Digital Banking N7",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "open",
    title: "Open Banking",
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: "origination",
    tag: "NBFC",
    title: "Loan Origination System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: "management",
    tag: "NBFC",
    title: "Loan Management System",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative min-h-[1177px] overflow-hidden bg-[#000D12] py-[47px] text-white max-lg:min-h-0 max-lg:py-20">
      <div className="pointer-events-none absolute right-[-140px] bottom-[-260px] h-[560px] w-[560px] rounded-full bg-[#0057FF]/25 blur-[150px]" />
      <div className="pointer-events-none absolute right-[130px] bottom-[-180px] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[110px]" />

      <Container className="relative z-10 grid gap-16 md:gap-20 lg:grid-cols-[433px_613px] lg:gap-[56px]">
        <div className="h-fit lg:w-[433px]">
          <h2 className="max-w-[433px] text-[30px] leading-[1.12] font-normal tracking-normal text-white min-[360px]:text-[34px] sm:text-[38px] md:text-[41px] lg:text-[37px] lg:leading-[120%] lg:tracking-[-0.01em]">
            All of our solutions are tailor-made to your needs
          </h2>

          <div className="mt-9 min-[360px]:mt-[48px]">
            <Button
              variant="outline"
              className="h-[44px] min-w-[190px] rounded-[8px] border-white/80 px-8 py-0 text-[11px] tracking-normal min-[360px]:h-[49px] min-[360px]:min-w-[226px] min-[360px]:rounded-[10px] min-[360px]:px-[59px] min-[360px]:text-[12px]"
            >
              Request demo
            </Button>
          </div>
        </div>

        <div className="grid w-full gap-x-12 gap-y-14 sm:grid-cols-2 lg:w-[613.012px] lg:gap-x-[78px] lg:gap-y-[76px]">
          {solutions.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-[252px] flex-col items-start"
            >
              <div className="mb-[28px] h-10 w-10 text-white/65 transition duration-300 group-hover:text-white lg:h-[42px] lg:w-[42px]">
                <SolutionIcon type={item.icon} />
              </div>

              <div className="mb-3 flex h-[12px] w-full justify-end font-mono text-[10px] font-bold tracking-widest text-white/45">
                {item.tag}
              </div>

              <h3 className="mb-[30px] text-[24px] leading-tight font-normal text-white/90">
                {item.title}
              </h3>

              <p className="mb-[28px] max-w-[310px] text-[16px] leading-[1.33] text-white/65">
                {item.description}
              </p>

              <LearnMoreButton />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

// function LearnMoreButton() {
//   return (
//     <button className="group/link mt-auto inline-flex items-center justify-center gap-2 text-center font-mono text-xs font-bold tracking-widest text-cyan-400 uppercase transition hover:text-cyan-300 focus-visible:outline-none lg:text-[13px]">
//       <span className="relative overflow-hidden pb-1">
//         Learn more
//         <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-300 group-hover/link:scale-x-0 group-focus-visible/link:scale-x-0" />
//         <span className="absolute bottom-0 left-0 h-px w-full -translate-x-full bg-current transition-transform duration-300 group-hover/link:translate-x-0 group-focus-visible/link:translate-x-0" />
//       </span>
//       <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
//     </button>
//   );
// }
function LearnMoreButton() {
  return (
    <button className="group/link mt-auto inline-flex items-right justify-center gap-[3px] text-center font-[Chivo_Mono] text-[14px] font-normal uppercase leading-[130%] tracking-widest text-[#00B4FD] transition hover:text-cyan-300 focus-visible:outline-none">
      
      <span className="relative overflow-hidden items-center">
        Learn more
       <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-current transition-transform duration-300 group-hover/link:scale-x-0 group-focus-visible/link:scale-x-0" />
        <span className="absolute bottom-0 left-0 h-px w-full -translate-x-full bg-current transition-transform duration-300 group-hover/link:translate-x-0 group-focus-visible/link:translate-x-0" />
      </span>

      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
        →
      </span>
    </button>
  );
}

function SolutionIcon({ type }: { type: string }) {
  const common = "h-full w-full";
if (type === "core") {
  return (
    <Image
      src="/logos/core.png"
      alt="Core Banking"
      width={42}
      height={42}
      className="h-full w-full object-contain"
    />
  );
}

if (type === "digital") {
  return (
    <Image
      src="/logos/digital.png"
      alt="Digital Banking"
      width={42}
      height={42}
      className="h-full w-full object-contain"
    />
  );
}

if (type === "open") {
  return (
    <Image
      src="/logos/open.png"
      alt="Open Banking"
      width={42}
      height={42}
      className="h-full w-full object-contain"
    />
  );
}

if (type === "origination") {
  return (
    <Image
      src="/logos/loan1.png"
      alt="Loan Origination"
      width={42}
      height={42}
      className="h-full w-full object-contain"
    />
  );
}

if (type === "management") {
  return (
    <Image
      src="/logos/loan.png"
      alt="Loan Management"
      width={42}
      height={42}
      className="h-full w-full object-contain"
    />
  );
}

  return null;
}
