import { Button } from "../ui/button"
import CTAsvg from "../../public/CTAsvg.svg"
import Image from "next/image"


export default function CTABanner() {
    return (
        <div>
            {/* Call to Action Section */}
            <section className="relative bg-brand-yellow pb-4">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d7c606] to-[#d6c304] opacity-90"></div>

                <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
                    {/* SVG Illustration */}
                    <Image
                        src={CTAsvg}
                        alt="CTA illustration"
                        width={250}
                        height={250}
                    />


                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-red font-jingleberry">
                        Join EnhanceMind AI 2025
                    </h2>

                    {/* Paragraph */}
                    <p className="text-lg text-brand-gray font-montserrat max-w-2xl">
                        Be part of the leading AI, ML, and Data Science conference. Connect,
                        learn, and innovate with industry experts.
                    </p>

                    {/* Button */}
                    <Button className="bg-brand-red text-white font-montserrat rounded-none px-8 py-3 text-lg font-semibold shadow-xl transition hover:bg-[#b30707]">
                        Book Now
                    </Button>
                </div>
            </section>
        </div >
    )
}