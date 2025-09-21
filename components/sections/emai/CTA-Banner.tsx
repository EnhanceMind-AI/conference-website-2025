import { Button } from "../../ui/button"
import CTAsvg from "../../../public/CTA.svg"
import Image from "next/image"
import Link from "next/link"
import CTABg from "../../../public/CTABg.png"


export default function CTABanner() {
    return (
        <div>
            {/* Call to Action Section */}
            <section className="relative bg-brand-yellow pb-4 pt-10">
                {/* Overlay */}
                <div className="absolute inset-0 opacity-90">
                    <Image
                        src={CTABg}
                        alt="CTA Banner"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
                    {/* SVG Illustration */}
                    <Image
                        src={CTAsvg}
                        alt="CTA illustration"
                        width={250}
                        height={250}
                    />


                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-yellow font-montserrat">
                        Join EnhanceMind AI 2025
                    </h2>

                    {/* Paragraph */}
                    <p className="text-lg text-brand-yellow font-montserrat max-w-2xl">
                        Be part of the leading AI, ML, and Data Science conference. Connect,
                        learn, and innovate with industry experts.
                    </p>

                    {/* Button */}
                    <Button className="bg-brand-red text-white font-montserrat rounded-none px-8 py-3 text-lg font-semibold shadow-xl transition hover:bg-brand-red/80 cursor-pointer">
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdL30OsqngOoACcVE4QVO3uAw7VEKkUCP_eEiH3-ruU5WEX_w/viewform" target="_blank">
                            Book Now
                        </Link>
                    </Button>
                </div>
            </section>
        </div >
    )
}