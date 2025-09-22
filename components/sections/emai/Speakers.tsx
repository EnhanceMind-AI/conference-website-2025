'use client'

import Guest from '../../../public/guestofhonour.png'
import Adwoa from '../../../public/AdwoaKoyundi.jpg'
import Alex from '../../../public/AlexRweyemamu.jpg'
import Asha from '../../../public/AshaNasri.jpeg'
import Ipyana from '../../../public/IpyanaMwaisekwa.jpeg'
import Steven from '../../../public/StevenManangu.jpg'
import SpeakerCard from '@/components/re-used/SpeakerCard'
import Isack from "../../../public/IsackOdero.jpeg";
import Zeph from "../../../public/zeph.png";
import Caleb from '../../../public/CalebAdogli.jpg'
import Brian from "../../../public/BrianKoyundi.png";
import Chris from "../../../public/ChrisBwesa.jpg";
import Taufiq from "../../../public/Taufiq.jpeg";
import Mgasa from "../../../public/MgasaLucas.jpg";
import { motion, Variants } from "framer-motion"

export default function Speakers() {

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

    const zoomIn: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const guest = { name: "Dr. Denis Mwighusa", role: "Executive Director ARIFA", image: Guest, nation: "Tanzania" }

    const keynoteSpeakers = [
        { name: "Brian Koyundi", role: "Founder of Deeptrack", image: Brian, nation: "Kenya" },
        { name: "Adwoa Bremang", role: "AI Researcher", image: Adwoa, nation: "Ghana" },
        { name: "Steven Manangu", role: "ML Engineer", image: Steven, nation: "Tanzania" },
        { name: "Toufiq Musah", role: "Biomedical Researcher and Engineer", image: Taufiq, nation: "Ghana" },
        { name: "Isack Odero", role: "Data Scientist and AI Entrepreneur", image: Isack, nation: "Tanzania" },
        { name: "Ipyana Mwaisekwa", role: "Instructor, IoT & EdgeAI Specialist", image: Ipyana, nation: "Tanzania" },
        { name: "Mgasa Lucas", role: "Researcher and Entrepreneur", image: Mgasa, nation: "Tanzania" },
        { name: "Alex Rweyemamu", role: "Founder of Cyber Swahili", image: Alex, nation: "Tanzania" },
        { name: "Asha Nasri", role: "AI/ML Software Engineer", image: Asha, nation: "Tanzania" },
        { name: "Caleb Adogli", role: "AI Engineer", image: Caleb, nation: "Togo" },
        { name: "Zephania Reuben", role: "Researcher and ML specialist", image: Zeph, nation: "Tanzania" },
        { name: "Chris Bwesa", role: "AI/ML Engineer", image: Chris, nation: "Tanzania" }
    ]
    return (
        <div id='speakers'>
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* Welcoming Phrase  */}
                <div className="welcoming-phrase">
                    <h1 className='text-left text-2xl sm:text-3xl text-brand-red font-montserrat font-semibold mb-2'>Conference Keynote Speakers</h1>
                    <h2 className='text-lg text-brand-gray font-montserrat'>We Are thrilled to Introduce the Following as our keyNote Speakers for EMAI Conference 2025.</h2>
                </div>

                {/* Guest of Honour */}
                <div className="guest-of-honour">
                    <div className="py-5">
                        <motion.div
                            variants={zoomIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
                            <SpeakerCard name={guest.name} role={guest.role} image={guest.image} nation={guest.nation} shape="rect" />
                        </motion.div>
                    </div>
                </div>

                {/* Keynote Speakers */}
                <div className="key-note-speakers">
                    <div className="py-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {keynoteSpeakers.map((speaker, index) => (
                                <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
                                    <SpeakerCard
                                        name={speaker.name}
                                        role={speaker.role}
                                        nation={speaker.nation}
                                        image={speaker.image}
                                        shape="circle"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}