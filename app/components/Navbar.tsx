"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Solutions",
    href: "#",
    hasMenu: true,
  },
  {
    label: "Resources",
    href: "#",
    hasMenu: true,
  },
  {
    label: "About Us",
    href: "#",
    hasMenu: false,
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-[31px] left-0 z-[100] w-full max-[720px]:top-[18px]">
      <div className="mx-auto w-full max-w-[716px] px-3 min-[360px]:px-4 md:px-0">
        <nav className="flex h-[47px] items-center justify-between rounded-[12px] bg-[#2F2F2FB2] px-[10px] py-[9px] shadow-xl shadow-black/15 backdrop-blur-[15px]">
          <Link
            href="/"
            className="relative h-[29px] w-[32px] shrink-0"
            aria-label="N7 home"
          >
            <Image
              src="/images/N7.png"
              alt="N7"
              fill
              priority
              sizes="32px"
              className="object-contain"
            />
          </Link>

          <ul className="hidden w-[263px] items-center gap-[20px] md:flex">
            {navItems.map((item) => (
              <li key={item.label} className="group/list">
                <Link
                  href={item.href}
                  className="flex h-[26px] items-center gap-[4px] rounded-[6px] px-[7px] font-mono text-[12px] leading-[130%] font-normal tracking-normal whitespace-nowrap text-[#E9F4F9] uppercase transition-all duration-300 ease-out hover:-translate-y-px hover:bg-[#E9F4F914] hover:text-white"
                >
                  {item.label}
                  {item.hasMenu ? (
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 9 6"
                      fill="none"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/list:translate-y-[1px] group-hover/list:rotate-180"
                    >
                      <path
                        d="M1 1L4.5 4.5L8 1"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.1"
                      />
                    </svg>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className="hidden h-[26px] w-[161px] items-center justify-center rounded-[6px] border border-[#E9F4F9] px-[37px] py-[5px] text-center font-mono text-[12px] leading-[130%] font-normal tracking-normal whitespace-nowrap text-[#E9F4F9] uppercase transition hover:bg-white hover:text-black md:inline-flex"
          >
            Request Demo
          </Link>

          <button
            className="inline-flex h-9 w-9 items-center justify-center md:hidden"
            aria-label="Open menu"
            type="button"
          >
            <span className="space-y-1">
              <span className="block h-[2px] w-6 bg-white" />
              <span className="block h-[2px] w-6 bg-white" />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
