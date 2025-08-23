'use client'

import { Card, CardContent } from "@/components/ui/card"
import { UsersRound, MapPinned, CalendarDays } from 'lucide-react'
import Typewriter from 'typewriter-effect'
import HeroImg from '../../../public/Hero.png'
import Link from 'next/link'
import { motion, Variants } from "framer-motion"

export default function Hero() {
    const cardVariants: Variants = {
        hidden: (direction: number) => ({
            opacity: 0,
            x: direction === 0 ? -100 : direction === 2 ? 100 : 0, // Left, Right
            y: direction === 1 ? -100 : 0 // Middle
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };
    return (
        <section className="relative w-full bg-fixed bg-center bg-cover py-48 sm:py-64" style={{ backgroundImage: `url(${HeroImg.src})` }}>

            {/* Gradient Overlay for depth & better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#8E081B]/80 via-black/60 to-black/70"></div>

            {/* Content Wrapper */}
            <div className="relative max-w-7xl mx-auto px-4 text-center">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-jingleberry drop-shadow-lg">EnhanceMind AI 2025 Conference</h1>

                {/* Sub Heading (Typewriter Effect) */}
                <div className="text-lg sm:text-2xl text-brand-yellow mt-4 font-montserrat">
                    <Typewriter
                        options={{
                            strings: ['AI at the Edge', 'Innovations, Impact, and Inclusion.'],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                        }}
                    />
                </div>

                {/* Call-to-Action Button */}
                <div className="mt-8">
                    <button className="px-6 py-3 bg-brand-yellow text-[#0F0A43] font-bold rounded-full shadow-lg hover:bg-[#FFD700] transition cursor-pointer">
                        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdL30OsqngOoACcVE4QVO3uAw7VEKkUCP_eEiH3-ruU5WEX_w/viewform" target="_blank">
                            Register Now
                        </Link>
                    </button>
                </div>
            </div>

            {/* Info Cards Section */}
            <motion.div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} >
                {[
                    { text: "All Invited", icon: <UsersRound className="size-10 text-white" /> },
                    { text: "25th - 27th September 2025", icon: <CalendarDays className="size-10 text-white" /> },
                    { text: "Dar Es Salaam", icon: <MapPinned className="size-10 text-white" /> },
                ].map((item, index) => (
                    <motion.div key={index} custom={index} variants={cardVariants} transition={{ delay: index * 0.3 }} >
                        <Card key={index} className="bg-brand-gray rounded-xl shadow-xl hover:shadow-2xl transition-transform hover:scale-105 border-t-4 border-brand-yellow" >
                            <CardContent className="flex items-center justify-between px-6 py-5 font-montserrat">
                                <p className="text-lg sm:text-xl font-semibold text-white font-montserrat">{item.text}</p>
                                {item.icon}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}