import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Packages from "@/components/sections/Packages"
// import Schedule from "@/components/sections/Schedule"
// import Speakers from "@/components/sections/Speakers"
import Sponsors from "@/components/sections/Sponsors"
import CTABanner from "@/components/sections/CTA-Banner";

export default function Home() {
  return (
    <div>
      <div className="bg-[#0F0A43]">
        <Hero />
        <About />
        {/* <Speakers /> */}
        {/* <Schedule /> */}
      </div>
      <div>
        <Packages />
        <Sponsors />
        <CTABanner />
      </div>
    </div>
  );
}