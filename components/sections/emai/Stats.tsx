'use client'

import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
    { label: "Speakers", value: 15 },
    { label: "Attendees", value: 250 },
    { label: "Sponsors", value: 15 },
    { label: "Sessions", value: 30 },
];

export default function Stats() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    })

    return (
        <div ref={ref} className='max-w-7xl mx-auto px-4'>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mx-auto my-14">
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
                                {stat.label === "Sessions" && "+"}
                            </span>
                            <span className="text-lg text-white font-montserrat">{stat.label}</span>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}