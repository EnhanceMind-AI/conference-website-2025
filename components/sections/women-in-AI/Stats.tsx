'use client'

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
    { label: "Speakers", value: 10 },
    { label: "Attendees", value: 120 },
    { label: "Universities", value: 7 },
    { label: "Professionals", value: 30 },
];

export default function Stats() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    })

    return (
        <div ref={ref} className='max-w-7xl mx-auto px-4'>

            <p className="text-3xl font-bold text-brand-yellow font-montserrat mb-3">Women in AI Breakfast metrics</p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mx-auto mb-14">
                {stats.map((stat, i) => (
                    <Card key={i} className="rounded-2xl bg-brand-red shadow-lg flex items-center justify-center">
                        <CardContent className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-white font-montserrat">
                                {/* Animate only when in view */}
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={4} // Animation time in seconds
                                        delay={0.5}
                                    />
                                ) : (
                                    0 // Static zero before entering view
                                )}
                                {stat.label === "Attendees" && "+"}
                                {stat.label === "Professionals" && "+"}
                            </span>
                            <span className="text-lg text-white font-montserrat">{stat.label}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}