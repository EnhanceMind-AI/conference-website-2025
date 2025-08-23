import React from 'react'
import { Smile } from 'lucide-react';
import Image from 'next/image';
import gilbert from '../../../public/PICHANO1.jpg'

export default function Team() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-left text-4xl sm:text-5xl text-brand-yellow font-jingleberry mt-12">Executive Profile</h1>

            <div className="flex flex-row items-center gap-2">
                <p className='text-brand-gray font-montserrat text-lg my-3'>Meet the Geniouses Behind EmAI Conference 2025. </p>
                <Smile size={35} className='text-brand-yellow animate-bounce' />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                {/* Team Member Card */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={gilbert}
                        alt="Team Member"
                        width="150"
                        height="100"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Gilbert Munuo</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Founder & CEO</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>

                   <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={gilbert}
                        alt="Team Member"
                        width="150"
                        height="100"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Gilbert Munuo</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Founder & CEO</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>

                   <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={gilbert}
                        alt="Team Member"
                        width="150"
                        height="100"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Gilbert Munuo</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Founder & CEO</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
