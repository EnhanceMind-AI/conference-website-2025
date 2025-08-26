"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../../ui/button"
import Link from "next/link"
import { motion, Variants } from "framer-motion"

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

export default function Packages() {
  return (
    <section id="packages">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl text-center text-brand-red font-montserrat font-semibold mb-10">Available Packages</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 justify-items-center">

          {/* Standard Package */}
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="bg-brand-red backdrop-blur-md border border-white/20 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-sm w-full">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-white text-center text-2xl font-jingleberry">
                  <p className="text-3xl">Standard Package</p>
                  Tshs 80,000/=
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <ul className="text-white font-montserrat space-y-2 list-disc list-inside">
                  <li>Post-Conference Resources</li>
                  <li>Access All Sessions</li>
                  <li>Conference Materials</li>
                  <li>Networking Opportunities</li>
                  <li>Exclusive Exhibitions</li>
                  <li>Meals & Refreshments</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button variant="outline" className="cursor-pointer bg-brand-yellow text-black font-montserrat rounded-none px-8 py-3 font-medium hover:brightness-90">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdL30OsqngOoACcVE4QVO3uAw7VEKkUCP_eEiH3-ruU5WEX_w/viewform" target="_blank">
                    Book
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="bg-brand-red backdrop-blur-md border border-white/20 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-sm w-full">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-white text-center text-2xl font-jingleberry">
                  <p className="text-3xl"> Premium Package</p>
                  Tshs 160,000/=
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <ul className="text-white font-montserrat space-y-2 list-disc list-inside">
                  <li>Post-Conference Resources</li>
                  <li>Access All Sessions</li>
                  <li>Workshop Certificate</li>
                  <li>Exclusive Exhibitions</li>
                  <li>Meals & Refreshments</li>
                  <li>Executive Networking Dinner</li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-center pb-6">
                <Button variant="outline" className="cursor-pointer bg-brand-yellow text-black font-montserrat rounded-none px-8 py-3 font-medium hover:brightness-90">
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdL30OsqngOoACcVE4QVO3uAw7VEKkUCP_eEiH3-ruU5WEX_w/viewform" target="_blank">
                    Book
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 flex justify-center items-center gap-3">
          {/* Badge/Icon */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="32" height="32"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-sparkles-icon lucide-sparkles animate-spin">
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" />
          </svg>

          {/* Text */}
          <p className="text-brand-red text-lg font-montserrat">
            Book now and get a discount on the <span className="font-bold">Standard Package</span>.
          </p>

          {/* Badge/Icon */}
          <svg xmlns="http://www.w3.org/2000/svg"
            width="32" height="32"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-tags-icon lucide-tags">
            <path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" />
            <path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" />
            <circle cx="10.5" cy="6.5" r=".5" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  )
}