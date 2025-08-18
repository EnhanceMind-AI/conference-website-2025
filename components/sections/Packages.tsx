'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from "../ui/button"

export default function Packages() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 my-14 px-28">

        <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl">Standard Package</CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            <li>Post-Conference Resources</li>
            <li>Access All Session</li>
            <li>Conference Materials</li>
            <li>Network Opportunities</li>
            <li>Exclusive Exhibitions</li>
            <li>Meals & Refreshments</li>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant='outline' className="cursor-pointer bg-[#FBAE04] rounded-none">
              <p className="justify-center p-5">Book</p>
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl">Premium Package</CardTitle>
          </CardHeader>
          <CardContent className="text-white">
            <li>Post-Conference Resources</li>
            <li>Access All Session</li >
            <li>Workshop Certificate</li >
            <li>Exclusive Exhibitions</li >
            <li>Meals & Refreshments</li >
            <li>Executive Networking Dinner</li >
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline" className="cursor-pointer bg-[#FBAE04] rounded-none">
              <p className="justify-center p-4">Book</p>
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  )
}