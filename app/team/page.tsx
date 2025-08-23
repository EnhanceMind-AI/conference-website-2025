import React from 'react'
import { Smile } from 'lucide-react';
import Image from 'next/image';
import zephania from '../../public/1.svg'
import maryat from '../../public/2.svg'
import elishaK from '../../public/3.svg'
import tamara from '../../public/4.svg'
import rebeca from '../../public/5.svg'
import luciana from '../../public/6.svg'
import johari from '../../public/7.svg'
import elishaN from '../../public/8.svg'
import gilbert from '../../public/9.svg'
import julieth from '../../public/10.svg'
import suzan from '../../public/11.svg'

export default function Team() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-left text-4xl sm:text-5xl text-brand-yellow font-jingleberry mt-12">Executive Profiles</h1>

            <div className="flex flex-row items-center gap-2">
                <p className='text-brand-gray font-montserrat text-lg my-3'>Meet the Geniouses Behind EmAI Conference 2025. </p>
                <Smile size={35} className='text-brand-yellow animate-bounce' />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
                {/* Team Member Cards */}

                {/* Zephania Reuben  */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={zephania}
                        alt="General Manager"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Zephania Reuben</h2>
                    <p className="text-brand-gray font-montserrat mb-3">General Manager</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Maryat Hussein */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={maryat}
                        alt="Project Manager"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Maryat Hussein</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Project Manager</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Elisha Kindars */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={elishaK}
                        alt="Creative Manager"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Elisha Kindars</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Creative Manager</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Tamara Andrew */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={tamara}
                        alt="Marketing Manager"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Tamara Andrew</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Marketing Manager</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Rebeca Joshua */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={rebeca}
                        alt="Marketing Manager"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Rebeca Joshua</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Marketing Manager</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Luciana Severine */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={luciana}
                        alt="Marketing Manager"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Luciana Severine</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Marketing Manager</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Johari Bakari  */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={johari}
                        alt="Business Development Manager"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Johari Bakari</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Business Development Manager</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Elisha Nsonjo  */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={elishaN}
                        alt="Business Development Manager"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Elisha Nsonjo</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Business Development Manager</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Gilbert Munuo  */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={gilbert}
                        alt="Web Developer"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Gilbert Munuo</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Web Developer</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Julieth Kokusima  */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={julieth}
                        alt="Customer Experience"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Julieth Kokusima</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Customer Experience</p>

                    {/* Placeholder for social icons */}
                    <div className="flex gap-3">
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                        <span className="w-8 h-8 bg-brand-yellow rounded-full"></span>
                    </div>
                </div>


                {/* Suzan Sembuli  */}
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <Image
                        src={suzan}
                        alt="Customer Experience"
                        width="300"
                        height="300"
                        className="rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold text-brand-red font-montserrat">Suzan Sembuli</h2>
                    <p className="text-brand-gray font-montserrat mb-3">Customer Experience</p>

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
