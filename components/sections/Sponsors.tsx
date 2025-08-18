import Image from 'next/image'
import sponsor from "../../public/Avatar.jpeg";

export default function Sponsors() {
    return (
        <div>
            {/* Sponsors Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto text-center px-6">
                    <h2 className="text-4xl font-bold text-[#0F0A43] mb-12">
                        Our Sponsors
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center">
                        {/* Mock sponsor logos */}
                        <Image
                            src={sponsor}
                            alt="Sponsor 1"
                            width={250}
                            height={600}
                            className="mx-auto grayscale hover:grayscale-0 transition cursor-pointer"
                        />
                        <Image
                            src={sponsor}
                            alt="Sponsor 2"
                            width={250}
                            height={600}
                            className="mx-auto grayscale hover:grayscale-0 transition cursor-pointer"
                        />
                        <Image
                            src={sponsor}
                            alt="Sponsor 3"
                            width={250}
                            height={600}
                            className="mx-auto grayscale hover:grayscale-0 transition cursor-pointer"
                        />
                        <Image
                            src={sponsor}
                            alt="Sponsor 4"
                            width={250}
                            height={600}
                            className="mx-auto grayscale hover:grayscale-0 transition cursor-pointer"
                        />
                    </div>

                    <p className="mt-12 text-lg text-gray-600">
                        We’re proud to be supported by industry leaders who make
                        EnhanceMind AI 2025 possible.
                    </p>
                </div>
            </section>
        </div>
    )
}