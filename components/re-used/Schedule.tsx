import { schedule } from "@/contents/Schedule"
import Image from "next/image";

export default function Schedule() {
    return (
        <div className="relative">
            {schedule.map((dayItem, idx) => (
                <div key={idx} className="mb-16">
                    <h2 className="text-2xl font-semibold font-montserrat mb-6 text-center">{dayItem.day} - {dayItem.date}</h2>
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-brand-gray h-full"></div>

                        {dayItem.sessions.map((session, sIdx) => {
                            const isLeft = sIdx % 2 === 0;
                            return (
                                <div key={sIdx} className={`mb-8 flex flex-col sm:flex-row items-center justify-${isLeft ? 'start' : 'end'} relative w-full`}>
                                    <div className={`bg-white rounded shadow-lg p-4 w-full sm:w-5/12 border-t-4 border-${isLeft ? 'brand-yellow' : 'brand-red'} 
                    ${isLeft ? 'sm:mr-auto sm:text-left' : 'sm:ml-auto sm:text-right'}`} >
                                        <div className="flex items-center space-x-4">
                                            {session.image && (
                                                <Image
                                                    src={session.image}
                                                    alt={session.speaker}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                            )}
                                            <div>
                                                <p className="font-mono text-sm text-brand-gray">{session.time}</p>
                                                <h3 className="font-semibold text-gray-800">{session.title}</h3>
                                                {!session.image && <p className="text-brand-gray">{session.speaker}</p>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}