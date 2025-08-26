'use client'

import Image from "next/image"
import Link from 'next/link'
import { motion, Variants } from "framer-motion"
import about1 from "../../../public/About1.jpeg"
import about2 from "../../../public/About2.jpeg"
import about3 from "../../../public/About3.jpeg"

const images = [about1, about2, about3];

// Variants for card animation
const cardVariants: Variants = {
    hidden: { opacity: 0, y: -200, rotate: -15 }, // start above, tilted
    visible: (index: number) => ({
        opacity: 1,
        y: index * 18,  // drop into stack
        x: index * 18,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: index * 0.3, // stagger each card
        },
    }),
};

export default function About() {
    return (
        <section id="about">
            <div className='max-w-7xl mx-auto px-4 pt-14 pb-8'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div className="about">
                        <h1 className='text-left text-4xl sm:text-5xl text-brand-red font-montserrat font-semibold mb-2'>About EMAI Conference</h1>

                        <p className="text-brand-gray text-justify text-lg font-montserrat mb-5">
                            Since 2022, EnhanceMind AI (EMAI) Conference has been an annual event dedicated to exploring the fundamentals, emerging trends, and groundbreaking breakthroughs in Artificial Intelligence (AI).
                            Now a recognized hub for innovation, thought leadership, and collaboration, the conference stands as a premier platform for technologists, entrepreneurs, researchers, and professionals across industries.
                            Each year, the EMAI Conference attracts a diverse audience, from data scientists and AI engineers to business leaders and startup founders who are eager to dive into the latest developments in AI, Machine Learning, Generative AI, and Data Science.
                        </p>

                        <div className="mt-4">
                            <p className="text-brand-gray text-justify text-lg font-montserrat">
                                As part of this year&apos;s diverse and inclusive programming, the conference will also feature special segments such as:
                                <span className="font-semibold"> Women in AI Breakfast</span> a space dedicated to celebrating and empowering women driving change in the AI field.
                            </p>
                            <Link href="/women-in-ai">
                                <button className="mt-3 px-6 py-2 bg-brand-red text-white font-semibold rounded-lg hover:bg-red-700 transition cursor-pointer">
                                    See More
                                </button>
                            </Link>
                        </div>

                    </div>

                    <motion.div className="flex justify-center items-center relative h-[500px] w-full" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={cardVariants}
                                drag
                                dragElastic={0.2}
                                whileTap={{ scale: 1.05, rotate: 3 }}
                                className="absolute cursor-grab active:cursor-grabbing"
                                style={{ zIndex: images.length - index }}
                            >
                                <Image src={img} alt={`EMAI ${index + 1}`} className="rounded-md shadow-2xl" width={450} height={450} />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div >
        </section>
    )
}