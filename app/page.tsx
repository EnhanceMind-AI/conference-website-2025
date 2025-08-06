import About from "@/components/sections/About";
import ContactUs from "@/components/sections/Contact-Us";
import Hero from "@/components/sections/Hero";
import Packages from "@/components/sections/Packages";
import Schedule from "@/components/sections/Schedule";
import Speakers from "@/components/sections/Speakers";
import Sponsors from "@/components/sections/Sponsors";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Packages />
      <Sponsors />
      <ContactUs />
    </div>
  );
}