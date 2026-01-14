import AboutSection from "@/components/AboutSection";
import BrandSection from "@/components/BrandSection";
import ContactSection from "@/components/ContactSection";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import SolutionSection from "@/components/SolutionSection";
import WorkSection from "@/components/WorkSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <HeroSection/>
    <AboutSection/>
    <SolutionSection/>
    <ProductSection/>
    <WorkSection/>
    {/* <BrandSection/> */}
    <ContactSection/>
    {/* <GoogleMapEmbed/> */}
   </div>
  );
}
