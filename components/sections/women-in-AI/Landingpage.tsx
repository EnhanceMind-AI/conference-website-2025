"use client"

import React from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const images = ["/wai4.jpg", "/DC7A1245.jpg", "/wai3.jpg", "/DC7A1356.jpg"]

export default function Landingpage() {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))
    return (
        <div className="w-full relative">
            <Carousel plugins={[plugin.current]} className="w-full" onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index} className="w-full">
                            {/* Slide container defines the height you want (75% of viewport) */}
                            <div className="relative w-full h-[75vh]">
                                {/* Background image layer */}
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />
                                {/* Optional dark overlay to improve text contrast */}
                                <div className="absolute inset-0 bg-black/20" />

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}