import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructurs from "@/components/Instructurs";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebenair from "@/components/UpcomingWebenair";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCard />
      <UpcomingWebenair />
      <Instructurs />
      <Footer />
    </div>
  );
}
