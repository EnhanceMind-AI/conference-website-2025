'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    { label: "Speakers", value: 25 },
    { label: "Attendees", value: 300 },
    { label: "Sponsors", value: 15 },
    { label: "Sessions", value: 20 },
];

export default function About() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2
    })

    return (
        <div ref={ref} className='max-w-7xl mx-auto px-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12">
                <div className="about">
                    <h1 className='text-left text-4xl text-white mb-2'>About EMAI Conference</h1>

                    <p className='text-white text-justify text-lg mb-5'>EnhanceMind AI(emAI) Conference is an event prepared and hosted by CameLabs to explore the fundamentals, advances, and breakthroughs in Artificial Intelligence.</p>
                    <p className='text-white text-justify text-lg'>The EnhanceMind AI Conference is a premier event for professionals in the field of Artificial Intelligence, Machine Learning, and Data Science.
                        The conference is expected to attract diverse attendees from various industries such as technology, healthcare, finance, and more.
                        Attendees include C-level executives, researchers, data scientists, engineers, and developers who are looking to stay on the cutting edge of the latest advancements in AI technology.
                        The conference also attracts start-up companies and entrepreneurs who are interested in exploring new opportunities in the AI industry.
                    </p>
                </div>
                <div className="image">
                    <h1 className='text-white'>Image Goes Here</h1>
                </div>
            </div>

            <div className="insights-card">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mx-32 my-20">
                    {stats.map((stat, i) => (
                        <Card key={i} className="rounded-2xl bg-[#FBAE04] shadow-lg flex items-center justify-center">
                            <CardContent className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-white">
                                    {/* Animate only when in view */}
                                    {inView ? (
                                        <CountUp
                                            start={0}
                                            end={stat.value}
                                            duration={4} // Animation time in seconds
                                            delay={1}
                                        />
                                    ) : (
                                        0 // Static zero before entering view
                                    )}
                                    {stat.label === "Attendees" && "+"}
                                    {stat.label === "Sessions" && "+"}
                                </span>
                                <span className="text-lg text-white">{stat.label}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="what2expect">
                <h2 className="text-center text-4xl text-white">What to Expect at EMAI Conference 2025?</h2>
                <p className="text-white text-lg mt-4">
                    At the heart of every great conference is the chance to connect  and this one is no different.
                    Whether you&apos;re a curious student, a seasoned engineer, or an industry expert, the Emai AI Conference offers a rare space to meet fellow thinkers, makers, and visionaries.
                    Share ideas over coffee, find potential collaborators, or simply get inspired by the people around you.
                    Because sometimes, the best breakthroughs happen between sessions. Other stuff to expect Include......
                </p>
            </div>

            <div className="exCards">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                    <Card className="rounded-sm bg-[#FBAE04]">
                        <CardHeader>
                            <CardTitle className="text-lg">Inspiring Talks & Panel Sessions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                From ethical dilemmas to real-world applications, our talks dive into the most pressing questions in AI today.
                                Hear from thought leaders, researchers, and change-makers as they explore how artificial intelligence is shaping our world and what lies ahead.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-sm bg-[#FBAE04]">
                        <CardHeader>
                            <CardTitle className="text-lg">Innovative Project Showcases</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Experience the future of AI up close.
                                Our exhibition space features cutting-edge demos, prototypes, and live showcases from startups, researchers, and developers.
                                It&apos;s your chance to explore what&apos;s being built and who&apos;s building it.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-sm bg-[#FBAE04]">
                        <CardHeader>
                            <CardTitle className="text-lg">Hands-On Technical Workshops</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Level up your skills with focused, practical sessions led by experienced practitioners.
                                Whether it&apos;s learning a new framework, experimenting with models, or diving into data, these workshops are built to give you something real to take home.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div >
    )
}