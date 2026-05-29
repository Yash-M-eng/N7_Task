"use client";

import Link from "next/link";

export default function Footer() {
  const solutionsLinks = [
    { label: "Core Banking CB7", href: "#" },
    { label: "Digital Banking N7", href: "#" },
    { label: "Open Banking", href: "#" },
    { label: "Loan Origination System", href: "#" },
    { label: "Loan Management System", href: "#" },
    { label: "Digital Transformation", href: "#" },
  ];

  const bankingLinks = [
    { label: "About Us", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Company", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Core Team", href: "#" },
    { label: "Brand Center", href: "#" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#000D12] pb-12 pt-20 text-white select-none md:pt-24 lg:pb-16 lg:pt-28">
      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] gap-12 px-5 sm:px-8 lg:grid-cols-[440px_1fr] lg:gap-[52px] lg:px-10 xl:px-0">
        <div className="w-full max-w-[440px]">
          <FooterMark />
        </div>

        <div className="min-w-0">
          <div className="grid gap-10 pb-16 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:gap-14">
            <FooterAddress
              city="London"
              lines={["Linktia Infosystems Ltd – CB7,", "26 Main Road Sundridge,TN14 6EP,", "England, United Kingdom."]}
            />
            <FooterAddress
              city="Dubai"
              lines={["Linktia Infosystems Ltd –", "CB7,Jumeirah Business, Center 5", "Cluster W, Jumeirah Lakes Towers,", "Dubai, United Arab Emirates"]}
            />
            <FooterAddress
              city="London"
              lines={["Linktia Infosystems Ltd –", "CB7,Nirmal, Anand Nagar,", "Suncity Road, Pune,", "Maharashtra, 411041, India"]}
            />
          </div>

          <div className="grid gap-12 pb-14 sm:grid-cols-2 md:grid-cols-3 md:gap-12 lg:gap-14">
            <FooterColumn title="Solutions" links={solutionsLinks} widthClass="max-w-[175px]" />
            <FooterColumn title="N7 Banking" links={bankingLinks} widthClass="max-w-[170px]" />
            <FooterColumn title="Our Socials" links={socialLinks} widthClass="max-w-[170px]" />
          </div>

          <p className="max-w-[820px] text-[13px] leading-[1.35] text-white/20 lg:text-[14px]">
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies
            Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterMark() {
  return (
    <svg viewBox="0 0 440 232" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="footer-mark-gradient" x1="69" y1="20" x2="324" y2="211" gradientUnits="userSpaceOnUse">
          <stop stopColor="#15C6F2" />
          <stop offset="0.52" stopColor="#078DFF" />
          <stop offset="1" stopColor="#19D9F0" />
        </linearGradient>
      </defs>
      <path
        d="M0 0H40L161 177V0H199V232H163L39 51V232H0V0Z"
        fill="url(#footer-mark-gradient)"
      />
      <path
        d="M240 0H406V32C350 100 320 158 317 232H276C279 157 309 96 365 32H240V0Z"
        fill="url(#footer-mark-gradient)"
      />
    </svg>
  );
}

function FooterAddress({ city, lines }: { city: string; lines: string[] }) {
  return (
    <div>
      <h4 className="mb-5 text-[16px] font-medium text-white">{city}</h4>
      <p className="max-w-[270px] text-[15px] leading-[1.35] text-white/62 lg:text-[16px]">
        {lines.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}

function FooterColumn({
  title,
  links,
  widthClass,
}: {
  title: string;
  links: { label: string; href: string }[];
  widthClass: string;
}) {
  return (
    <div>
      <h4 className="mb-5 text-[16px] font-medium text-white lg:text-[17px]">{title}</h4>
      <ul className="space-y-[13px]">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={`group flex items-start justify-between gap-5 text-[15px] leading-[1.32] text-white/62 transition hover:text-[#00B4FD] lg:text-[16px] ${widthClass}`}
            >
              <span>{link.label}</span>
              <span className="shrink-0 text-[20px] leading-none text-[#00B4FD] transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}