import HomeHeroSection from "@/component/home/Hero";
import MobileAppDevelopmentSection from "@/component/home/MobileAppDevelopmentSection";
import StatsSection from "@/component/home/StatsSection";
import TechStack from "@/component/home/TechStack";
import Testimonials from "@/component/home/Testimonials";
import WebDevelopmentSection from "@/component/home/WebDevelopmentSection";
import WhatWeOffer from "@/component/home/WhatWeOffer";


export default function Home() {
  return (
    <div>
      <HomeHeroSection/>
      <WhatWeOffer/>
      <WebDevelopmentSection/>
      <MobileAppDevelopmentSection/>
      <StatsSection/>
      <Testimonials/>
      <TechStack/>
    </div>
  );
}
