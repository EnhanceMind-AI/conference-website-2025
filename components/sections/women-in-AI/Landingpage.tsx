"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = ["/wai4.jpg", "/DC7A1245.jpg", "/wai3.jpg", "/DC7A1356.jpg"]

export default function Landingpage() {
    const [current, setCurrent] = React.useState(0)
    const autoplayDelay = 3000 // 3 seconds
    const timerRef = React.useRef<NodeJS.Timeout | null>(null)

    React.useEffect(() => {
        startAutoplay()
        return () => stopAutoplay()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    const startAutoplay = () => {
        stopAutoplay()
        timerRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, autoplayDelay)
    }

    const stopAutoplay = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
    }

    return (
        <div className="relative w-full h-[75vh] md:h-[90vh] overflow-hidden" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
            <AnimatePresence>
                {images.map((src, index) =>
                    index === current ? (
                        <motion.div key={src} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                            {/* Background image */}
                            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${src})` }} />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/30" />

                            {/* Hidden Next.js Image for optimization */}
                            <Image src={src} alt={`Slide ${index}`} fill className="hidden" />
                        </motion.div>
                    ) : null
                )}
            </AnimatePresence>

            {/* Optional indicators */}
            <div className="absolute bottom-5 w-full flex justify-center gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-yellow-400" : "bg-gray-500"}`}
                        onClick={() => setCurrent(idx)}
                    />
                ))}
            </div>
        </div>
    )
}