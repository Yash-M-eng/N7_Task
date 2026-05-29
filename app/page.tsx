import CaseStudiesSection from "./components/CaseStudiesSection";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SolutionsSection from "./components/SolutionsSection";
import GetYourSelf from "./components/GetYourSelf"
import TakeFullAdvantage from "./components/TakeFullAdvantage";
import CloudBankingSection from "./components/CloudBankingSystem";
import DigitalBankingSection from "./components/DigitalBankingSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000D12] text-white">
      <Navbar />
      <HeroSection />
      <SolutionsSection />
      <CloudBankingSection />
      <TakeFullAdvantage />
      <DigitalBankingSection/>
      <GetYourSelf />
      <CTASection brand="N7" />
      <CaseStudiesSection />
      <Footer/>
      

    </main>
  );
}
