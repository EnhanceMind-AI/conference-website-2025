'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, Variants } from "framer-motion"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
}

export default function What2Expect() {
    return (
        <div className="relative w-full py-14 bg-gradient-to-b from-[#da0808] via-[#fefefe] to-white">
            <div className='max-w-7xl mx-auto px-4'>
                <div className="what2expect">
                    <h2 className="text-center text-4xl sm:text-5xl text-brand-yellow font-jingleberry">What to Expect at EMAI Conference 2025?</h2>
                    <p className="text-brand-gray text-lg mt-4 font-montserrat">
                        At the heart of every great conference is the chance to connect  and this one is no different.
                        Whether you&apos;re a curious student, a seasoned engineer, or an industry expert, the EmAI Conference offers a rare space to meet fellow thinkers, makers, and visionaries.
                        Share ideas over coffee, find potential collaborators, or simply get inspired by the people around you.
                        Because sometimes, the best breakthroughs happen between sessions. Other stuff to expect Include......
                    </p>
                </div>

                <div className="exCards">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 justify-items-center">

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                            <Card className="bg-white backdrop-blur-sm max-w-sm rounded-none mb-12 cursor-pointer shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl sm:text-2xl text-center text-brand-red font-jingleberry">Inspiring Talks & Panel Sessions</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-brand-gray font-montserrat">
                                        From ethical dilemmas to real-world applications, our talks dive into the most pressing questions in AI today.
                                        Hear from experienced leaders &researchersas they explore how artificial intelligence is shaping our world and what lies ahead.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                            <Card className="bg-white backdrop-blur-md max-w-sm w-full text-[#0F0A43] rounded-none mb-12 cursor-pointer shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl sm:text-2xl text-center text-brand-red font-jingleberry">Innovative Project Showcases</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-brand-gray font-montserrat">
                                        Experience the future of AI up close.
                                        Our exhibition space features cutting-edge demos, prototypes, and live showcases from startups, researchers, and developers.
                                        It&apos;s your chance to explore what&apos;s being built and who&apos;s building it.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                            <Card className="bg-white backdrop-blur-md max-w-sm w-full text-[#0F0A43] rounded-none mb-12 cursor-pointer shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                                <CardHeader>
                                    <CardTitle className="text-xl sm:text-2xl text-center text-brand-red font-jingleberry">Hands-On Technical Workshops</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-brand-gray font-montserrat">
                                        Level up your skills with focused, practical sessions led by experienced practitioners.
                                        Whether it&apos;s learning a new framework, experimenting with models, or diving into data, these workshops are built to give you something real to take home.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}