import React from 'react'

const timelineData = [
    {
        date: 'April 5, 2025',
        title: '1st Session',
        description: 'Kicked off this year&apos;s series with 70+ attendees, showcasing the growing interest and commitment to elevating women in the AI field.'
    },
    {
        date: 'Late July 2025',
        title: '2nd Session',
        description: 'Upcoming session designed to deepen engagement and expand impact.'
    },
    {
        date: 'EmAI Conference(25th - 27th, September 2025)',
        title: 'Final Session',
        description: 'High-impact gathering point within the main event to celebrate and empower women leaders in AI.'
    }
]

export default function HistoryTimeline() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Header */}
            <div className="mb-10">
                <h1 className="text-left text-4xl sm:text-5xl text-brand-yellow font-jingleberry mb-4">Women in AI Breakfast</h1>

                <p className="text-brand-gray font-montserrat text-lg mb-4">
                    Since 2024, the Women in AI Breakfast is a featured sub-event under the EnhanceMind AI Conference, designed to celebrate, elevate, and empower women driving innovation in Artificial Intelligence and related technologies.
                </p>

                <p className="text-brand-gray font-montserrat text-lg">
                    The 2025 edition spans three sessions, amplifying inclusivity and diverse representation within the AI ecosystem.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative border-l-4 border-brand-red pl-6">
                {timelineData.map((item, index) => (
                    <div key={index} className="mb-8 ml-4">
                        {/* Dot */}
                        <div className="absolute -left-3.5 w-6 h-6 bg-brand-yellow rounded-full border-4 border-white"></div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-brand-red font-montserrat">{item.title}</h3>
                        <p className="text-sm font-semibold text-brand-gray">{item.date}</p>
                        <p className="mt-2 text-brand-gray font-montserrat">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}