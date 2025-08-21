import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Packages from "@/components/sections/Packages"
// import Schedule from "@/components/sections/Schedule"
// import Speakers from "@/components/sections/Speakers"
import Sponsors from "@/components/sections/Sponsors"
import CTABanner from "@/components/sections/CTA-Banner"
import Goal from "@/components/sections/Goal"
import Stats from "@/components/sections/Stats"
import Showcase from "@/components/sections/Showcase"
import What2Expect from "@/components/sections/What2Expect"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Goal />
      <Stats />
      <What2Expect />
      {/* <Speakers /> */}
      {/* <Schedule /> */}
      <Packages />
      <Showcase />
      <CTABanner />
      <Sponsors />
    </div>
  );
}