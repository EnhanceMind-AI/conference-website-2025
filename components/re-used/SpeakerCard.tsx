'use client'

import Image from "next/image";
import { SpeakerCardsProps } from "@/interfaces/SpeakerCards";

export default function SpeakerCard(SpeakerCardsProps: SpeakerCardsProps) {
    const baseClasses = "relative mx-auto cursor-pointer group overflow-hidden shadow-lg transition-all duration-500 ease-in-out";

    const shapeClasses = SpeakerCardsProps.shape === "circle" ? "w-64 h-72 rounded-full" : "w-64 h-80 cursor-pointer";

    return (
        <div className={`${baseClasses} ${shapeClasses}`}>
            <Image
                alt={SpeakerCardsProps.name}
                src={SpeakerCardsProps.image}
                width={250}
                height={250}
                className={`object-cover w-full h-full border-4 border-yellow-300 ${SpeakerCardsProps.shape === "circle" ? "rounded-full" : "rounded-none"
                    }`}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center
                   bg-black/50 text-white opacity-0 group-hover:opacity-100
                   transition-opacity duration-500 ease-in-out">
                <h3 className="text-lg font-semibold mb-1.5">{SpeakerCardsProps.name}</h3>
                <p className="text-sm">{SpeakerCardsProps.role}</p>
                <p className="text-sm mt-1.5">{SpeakerCardsProps.nation}</p>
            </div>
        </div>
    )
}