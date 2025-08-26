"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../../ui/button";

export default function Showcase() {
    const timelineItem = (title: string, date: string) => (
        <div className="relative pl-10 pb-5">
            {/* Circle marker */}
            <div className="absolute left-0 top-1.5 w-4 h-4 bg-brand-yellow rounded-full border-2 border-white"></div>
            {/* Title and date */}
            <p className="font-montserrat text-lg text-brand-gray">
                {title}: <span className="font-semibold text-brand-red">{date}</span>
            </p>
        </div>
    );
    return (
        <section id="showcase">
            <div className="max-w-7xl mx-auto px-4 py-10">
                {/* Page Title */}
                <h1 className="text-4xl sm:text-5xl text-left text-brand-yellow font-montserrat font-semibold mb-8">
                    Showcase
                </h1>

                {/* Grid layout for sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* AI4SDGs Competition */}
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-montserrat text-brand-red mb-4">
                            AI4SDGs Competition
                        </h2>
                        <p className="text-brand-gray mb-6 font-montserrat sm:text-lg leading-relaxed">
                            A showcase of innovative AI solutions aligned with the UN Sustainable
                            Development Goals.
                        </p>

                        <div className="space-y-6 text-brand-gray font-montserrat">
                            <div>
                                <h3 className="font-semibold text-lg">Eligibility</h3>
                                <p>
                                    Open to individuals, teams, and organizations from academia,
                                    industry, and startups.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">Judging Criteria</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Innovation</li>
                                    <li>Impact</li>
                                    <li>Scalability</li>
                                    <li>Feasibility</li>
                                    <li>Alignment with SDGs</li>
                                </ul>
                            </div>

                            {/* Timeline */}
                            <h3 className="text-xl font-semibold text-brand-gray mb-4">Competition Timeline</h3>
                            <div className="relative border-l-4 border-brand-red pl-5">
                                {timelineItem("Launching Date", "June 25, 2025")}
                                {timelineItem("Submission Deadline", "August 25, 2025")}
                                {timelineItem("Winners Announced", "September 27, 2025")}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 flex justify-center">
                            <Button variant="outline" className="cursor-pointer bg-brand-yellow text-brand-gray font-montserrat rounded-none px-8 py-3 font-medium hover:brightness-90">
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdL30OsqngOoACcVE4QVO3uAw7VEKkUCP_eEiH3-ruU5WEX_w/viewform" target="_blank">
                                    Submit Project
                                </Link>
                            </Button>
                        </div>
                    </section>

                    {/* EMAI Expo */}
                    <section>
                        <h2 className="text-2xl sm:text-3xl font-montserrat text-brand-red mb-4">
                            EMAI Expo
                        </h2>
                        <p className="text-brand-gray mb-6 text-base sm:text-lg leading-relaxed font-montserrat">
                            A dynamic platform to exhibit groundbreaking AI projects, prototypes,
                            and solutions.
                        </p>

                        <div className="text-brand-gray font-montserrat mb-6">
                            <h3 className="font-semibold text-lg">Eligibility</h3>
                            <p>
                                Open to individuals, teams, and organizations from academia,
                                industry, and startups.
                            </p>
                        </div>

                        <div className="space-y-6 text-brand-gray font-montserrat ">
                            <div>
                                <h3 className="font-semibold text-lg">Features</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>
                                        Dedicated demo stations with tables, chairs, power supply, and
                                        internet
                                    </li>
                                    <li>
                                        Opportunity to present live demos and interact with attendees
                                    </li>
                                    <li>
                                        Branding opportunities for startups, researchers, and corporates
                                    </li>
                                </ul>
                            </div>

                            {/* Timeline */}
                            <h3 className="text-xl font-semibold text-brand-gray mb-4">Expo Timeline</h3>
                            <div className="relative border-l-4 border-brand-red pl-6">
                                {timelineItem("Launching Date", "June 30, 2025")}
                                {timelineItem("Submission Deadline", "August 31, 2025")}
                                {timelineItem("Notification of Acceptance", "September 15, 2025")}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8 flex justify-center">
                            <Button variant="outline" className="cursor-pointer bg-brand-yellow text-brand-gray font-montserrat rounded-none px-8 py-3 font-medium">
                                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdL30OsqngOoACcVE4QVO3uAw7VEKkUCP_eEiH3-ruU5WEX_w/viewform" target="_blank">
                                    Register for Expo
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}