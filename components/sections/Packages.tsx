'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button"

export default function Packages() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-14">
      <h2 className="text-4xl font-bold text-center text-[#0F0A43] mb-12">Available Packages</h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-20 justify-items-center">

        {/* Standard Package */}
        <Card className="bg-[#0F0A43]/90 backdrop-blur-md border border-white/20 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-sm w-full">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-white text-center text-2xl">Standard Package</CardTitle>
          </CardHeader>
          <CardContent className="px-6">
            <ul className="text-white space-y-2 list-disc list-inside">
              <li>Post-Conference Resources</li>
              <li>Access All Sessions</li>
              <li>Conference Materials</li>
              <li>Networking Opportunities</li>
              <li>Exclusive Exhibitions</li>
              <li>Meals & Refreshments</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button variant="outline" className="cursor-pointer bg-[#FBAE04] rounded-none px-8 py-3 font-medium">
              Book
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Package */}
        <Card className="bg-[#0F0A43]/90 backdrop-blur-md border border-white/20 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl max-w-sm w-full">
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-white text-center text-2xl">Premium Package</CardTitle>
          </CardHeader>
          <CardContent className="px-6">
            <ul className="text-white space-y-2 list-disc list-inside">
              <li>Post-Conference Resources</li>
              <li>Access All Sessions</li>
              <li>Workshop Certificate</li>
              <li>Exclusive Exhibitions</li>
              <li>Meals & Refreshments</li>
              <li>Executive Networking Dinner</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center pb-6">
            <Button variant="outline" className="cursor-pointer bg-[#FBAE04] rounded-none px-8 py-3 font-medium">
              Book
            </Button>
          </CardFooter>
        </Card>

      </div>
      <div className="text-center mt-12">
        <p className="text-black text-lg">
          Book now and get a discount on the standard package.
        </p>
      </div>
    </div>
  )
}