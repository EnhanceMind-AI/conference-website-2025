import { Button } from "../ui/button";


export default function CTABanner() {
    return (
        <div>
            {/* Call to Action Section */}
            <section className="relative bg-[#0F0A43] py-24 text-center">
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A43] to-[#1C1460] opacity-90"></div>

                <div className="relative max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Join EnhanceMind AI 2025</h2>
                    <p className="text-lg text-gray-200 mb-8">Be part of the leading AI, ML, and Data Science conference. Connect, learn, and innovate with industry experts.</p>

                    <Button variant="outline" className="bg-[#FBAE04] text-[#0F0A43] rounded-none px-8 cursor-pointer text-lg font-semibold shadow-xl transition">
                        Book  Now
                    </Button>
                </div>
            </section>
        </div>
    )
}