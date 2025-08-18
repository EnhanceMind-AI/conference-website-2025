'use client'

import { Card, CardContent, } from "@/components/ui/card"
import { User, MapPinned, CalendarDays } from 'lucide-react';
import Typewriter from "typewriter-effect";
import HeroImg from "../../public/Hero.jpg";


export default function Hero() {
    return (
        <section className="relative w-full bg-fixed bg-center bg-cover py-64" style={{ backgroundImage: `url(${HeroImg.src})` }}>

            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white text-center font-semibold">
                    EnhanceMind AI 2025 Conference
                </h1>

                <div className="text-xl sm:text-3xl text-white text-center font-medium mt-3">
                    <Typewriter
                        options={{
                            strings: ['AI & Innovation Summit.', 'Global Networking Event.'],
                            autoStart: true,
                            loop: true,
                            delay: 60
                        }}
                    />
                </div>
            </div>

            {/* Info Cards */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
                <Card className="bg-[#FBAE04] rounded-tr-xl rounded-bl-xl shadow-xl hover:shadow-2xl transition-transform hover:scale-105">
                    <CardContent className="flex items-center justify-between px-6 py-4">
                        <p className="text-xl font-semibold text-[#0F0A43]">All Invited</p>
                        <User className="size-10 text-[#0F0A43]" />
                    </CardContent>
                </Card>

                <Card className="bg-[#FBAE04] rounded-tr-xl rounded-bl-xl shadow-xl hover:shadow-2xl transition-transform hover:scale-105">
                    <CardContent className="flex items-center justify-between px-6 py-4">
                        <p className="text-xl font-semibold text-[#0F0A43]">September 2025</p>
                        <CalendarDays className="size-10 text-[#0F0A43]" />
                    </CardContent>
                </Card>

                <Card className="bg-[#FBAE04] rounded-tr-xl rounded-bl-xl shadow-xl hover:shadow-2xl transition-transform hover:scale-105">
                    <CardContent className="flex items-center justify-between px-6 py-4">
                        <p className="text-xl font-semibold text-[#0F0A43]">Dar Es Salaam</p>
                        <MapPinned className="size-10 text-[#0F0A43]" />
                    </CardContent>
                </Card>
            </div>

        </section>
    )
}