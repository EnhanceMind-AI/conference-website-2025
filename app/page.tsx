import Hero from "@/components/sections/emai/Hero"
import About from "@/components/sections/emai/About"
import Packages from "@/components/sections/emai/Packages"
import Schedule from "@/components/sections/emai/Schedule"
import Speakers from "@/components/sections/emai/Speakers"
import Sponsors from "@/components/sections/emai/Sponsors"
import CTABanner from "@/components/sections/emai/CTA-Banner"
import Goal from "@/components/sections/emai/Goal"
import Stats from "@/components/sections/emai/Stats"
import Showcase from "@/components/sections/emai/Showcase"
import What2Expect from "@/components/sections/emai/What2Expect"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Goal />
      <Stats />
      <What2Expect />
      <Speakers />
      <Schedule />
      <Packages />
      <Showcase />
      <CTABanner />
      <Sponsors />
    </div>
  );
}