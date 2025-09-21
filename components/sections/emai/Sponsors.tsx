import Image from 'next/image'
import E7 from "../../../public/E7-logo.png"
// import E7 from "../../../public/E7-logo2.png"
import PawaAI from "../../../public/pawaAI-logo.svg";
import LogAI from "../../../public/logai.webp";
import NileAGI from "../../../public/nileagi-logo.webp";

export default function Sponsors() {
    return (
        <section id="sponsors">
            {/* Sponsors Section */}
            <section className="py-16" >
                <div className="max-w-7xl mx-auto text-center px-6">
                    <h2 className="text-4xl sm:text-5xl font-semibold text-brand-yellow font-montserrat mb-12">Our Sponsors</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center">
                        <Image
                            src={PawaAI}
                            alt="Sponsor 1"
                            width={250}
                            height={600}
                            className="mx-auto grayscale hover:grayscale-0 transition cursor-pointer"
                        />
                        <Image
                            src={E7}
                            alt="Sponsor 2"
                            width={250}
                            height={600}
                            className="mx-auto bg-cover grayscale hover:grayscale-0 transition cursor-pointer bg-brand-red"
                        />
                        <Image
                            src={NileAGI}
                            alt="Sponsor 3"
                            width={250}
                            height={600}
                            className="mx-auto grayscale hover:grayscale-0 transition cursor-pointer"
                        />
                        <Image
                            src={LogAI}
                            alt="Sponsor 4"
                            width={250}
                            height={600}
                            className="mx-auto grayscale hover:grayscale-0 transition cursor-pointer"
                        />
                    </div>

                    <p className="mt-12 text-lg text-brand-gray font-montserrat">
                        We&apos;re proud to be supported by industry leaders who make
                        EnhanceMind AI 2025 possible.
                    </p>
                </div>
            </section >
        </section >
    )
}