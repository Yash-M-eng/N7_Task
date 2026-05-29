"use client";

import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    category: "Getting started",
    title: "How we help brand reach out to more people",
    client: "Zoomerr",
  },
  {
    category: "Innovation",
    title: "Simplifying cross-border digital transactions",
    client: "SmartFinder",
  },
  {
    category: "Core tech",
    title: "Architecting modern micro-services core banking",
    client: "WavesMarathon",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={direction === "left" ? "M10 3.5 5.5 8l4.5 4.5" : "M6 3.5 10.5 8 6 12.5"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function CaseVector() {
  return (
    <div className="relative flex aspect-square w-[210px] shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-[#071C49] p-[18px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,180,253,0.28),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(0,87,255,0.32),transparent_34%)]" />
      <div className="absolute inset-[18px] rounded-[8px] border border-white/10" />
      <div className="relative grid h-[132px] w-[132px] grid-cols-5 gap-[9px] rotate-45">
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            className="h-[12px] w-[12px] rounded-[3px] bg-[#00B4FD]/70 shadow-[0_0_18px_rgba(0,180,253,0.32)]"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

function ReadMoreButton() {
  return (
    <button
      className="inline-flex w-full items-center justify-center rounded-[5px] border border-white/40 py-[8px] text-center font-mono text-[8px] font-medium tracking-wider text-white/45 uppercase transition duration-300 hover:border-white/70 hover:text-white"
      type="button"
    >
      Read more
    </button>
  );
}

function ViewAllButton() {
  return (
    <button
      className="group flex items-center justify-center gap-1.5 text-center font-mono text-[9px] font-bold tracking-widest text-[#00B4FD] uppercase transition hover:text-cyan-300"
      type="button"
    >
      <span className="relative overflow-hidden pb-1">
        View all
        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      </span>
      <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 6h8m0 0L6.5 2.5M10 6 6.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isChanging, setIsChanging] = useState(false);
  const changeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentStudy = caseStudies[currentIndex];

  useEffect(() => {
    return () => {
      if (changeTimer.current) {
        clearTimeout(changeTimer.current);
      }
    };
  }, []);

  const goToStudy = (nextIndex: number, nextDirection: "left" | "right") => {
    if (nextIndex === currentIndex || isChanging) {
      return;
    }

    if (changeTimer.current) {
      clearTimeout(changeTimer.current);
    }

    setDirection(nextDirection);
    setIsChanging(true);
    changeTimer.current = setTimeout(() => {
      setCurrentIndex(nextIndex);
      requestAnimationFrame(() => setIsChanging(false));
    }, 170);
  };

  const handleNext = () => {
    goToStudy((currentIndex + 1) % caseStudies.length, "right");
  };

  const handlePrev = () => {
    goToStudy((currentIndex - 1 + caseStudies.length) % caseStudies.length, "left");
  };

  const handleDotClick = (index: number) => {
    goToStudy(index, index > currentIndex ? "right" : "left");
  };

  return (
    <section className="mx-[calc(50%-50vw)] overflow-hidden bg-[#000D12] py-16 text-white md:py-20">
      <div className="relative z-10 mx-auto w-full max-w-[980px] px-5 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[30px] font-medium tracking-normal text-[#EAF2F8] md:text-[34px]">
            Our Case Studies
          </h2>
        </div>

        <div className="relative mx-auto min-h-[245px] max-w-[690px]">
          <div className="pointer-events-none absolute top-[26px] left-[-44px] hidden h-[190px] w-[260px] rounded-[8px] bg-[#021820]/55 opacity-70 sm:block" />
          <div className="pointer-events-none absolute top-[26px] right-[-44px] hidden h-[190px] w-[260px] rounded-[8px] bg-[#021820]/55 opacity-70 sm:block" />

          <div
            className="relative mx-auto flex flex-col items-center gap-9 rounded-[12px] bg-[#021A22] p-5 shadow-2xl shadow-black/25 transition-all duration-500 ease-out md:flex-row"
            key={currentIndex}
          >
            <CaseVector />

            <div className="relative flex min-h-[210px] flex-1 overflow-hidden py-4">
              <div
                className={`flex w-full flex-col items-start justify-between transition duration-300 ease-out ${
                  isChanging
                    ? direction === "right"
                      ? "-translate-x-4 opacity-0"
                      : "translate-x-4 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
              <div>
                <span className="font-mono text-[8px] font-semibold tracking-widest text-[#00B4FD]/70 uppercase">
                  {currentStudy.category}
                </span>

                <h3 className="mt-5 max-w-[270px] text-[27px] leading-[1.05] font-medium tracking-normal text-white">
                  {currentStudy.title}
                </h3>

                <div className="mt-6 flex items-center gap-2">
                  <div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-white/25">
                    <span className="h-[8px] w-[8px] rounded-[2px] bg-[#000D12]" />
                  </div>
                  <span className="text-[13px] font-semibold text-white/45">
                    {currentStudy.client}
                  </span>
                </div>
              </div>

                <ReadMoreButton />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[690px] flex-col items-center justify-between gap-6 px-2 sm:flex-row">
          <div className="flex flex-1 items-center justify-center gap-5">
            <button
              className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition duration-300 hover:bg-[#00B4FD] hover:text-[#000D12] active:scale-95"
              disabled={isChanging}
              onClick={handlePrev}
              type="button"
              aria-label="Previous case study"
            >
              <ChevronIcon direction="left" />
            </button>

            <div className="flex items-center gap-[5px]">
              {caseStudies.map((study, index) => (
                <button
                  key={study.title}
                  onClick={() => handleDotClick(index)}
                  className={`h-[6px] rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-[22px] bg-[#00B4FD]/55"
                      : "w-[6px] bg-white/20 hover:bg-white/45"
                  }`}
                  type="button"
                  disabled={isChanging}
                  aria-label={`Show ${study.client} case study`}
                />
              ))}
            </div>

            <button
              className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#00B4FD] text-[#00B4FD] transition duration-300 hover:bg-[#00B4FD] hover:text-[#000D12] active:scale-95"
              disabled={isChanging}
              onClick={handleNext}
              type="button"
              aria-label="Next case study"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>

          <ViewAllButton />
        </div>
      </div>
    </section>
  );
}
