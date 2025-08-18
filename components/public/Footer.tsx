import React from 'react'
import { Button } from '../ui/button'
import { MapPinned, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 my-16">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        <div className="left-wing">
          <div className="">
            <p>Join us to Unlock the potential of Artificial Intelligence.  </p>
            <Button variant='outline' className="bg-[#FBAE04] my-2">
              <p className="flex justify-center">Register</p>
            </Button>
          </div>

          <div className="flex items-stretch space-x-2">
            <MapPinned size={35} /> <p>Dar Es Salaam, Tanzania.</p>
          </div>
        </div>

        <div className="right-wing">
          <Youtube />
        </div>
      </div>
    </div>
  )
}