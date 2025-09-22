'use client'

import Link from 'next/link'
import { FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { MapPinned, Instagram, Youtube, Mail, Copyright } from 'lucide-react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';

export default function Footer() {

  const placeName = "Seedspace Dar es Salaam";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}&query=-6.778841991951824,39.25265973220905`;
  const appleMapsUrl = "http://maps.apple.com/?ll=-6.778841991951824,39.25265973220905&q=Seedspace+Dar+es+Salaam";


  return (
    <footer className="bg-brand-gray text-white py-24 font-montserrat">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Left Wing */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <p className="text-center sm:text-left text-[#f9e604]">
              Join us to Unlock the potential of Artificial Intelligence.
            </p>

            <div className="flex items-center space-x-2 text-white/80">
              <MapPinned size={40} className="text-brand-red/80" />
              {/* Dropdown for Maps */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-brand-yellow cursor-pointer text-brand-gray hover:bg-brand-yellow/90 rounded-full">
                    Open in Maps
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-brand-gray text-white">
                  <DropdownMenuItem onClick={() => window.open(googleMapsUrl, "_blank")} className='cursor-pointer rounded-full hover:bg-gray-100/50 px-3 py-2'>
                    Google Maps
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => window.open(appleMapsUrl, "_blank")} className='cursor-pointer rounded-full hover:bg-gray-100/50 px-3 py-2'>
                    Apple Maps
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Right Wing */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Link href="mailto:organizers@emaiconference.com">
                <Mail size={28} className="hover:text-[#f9e604] transition" />
              </Link>
              <Link href="https://www.youtube.com/@emaiconference" target="_blank">
                <Youtube size={28} className="hover:text-[#f9e604] transition" />
              </Link>
              <Link href="https://www.linkedin.com/company/emai-conference" target="_blank">
                <FaLinkedin size={26} className="hover:text-[#f9e604] transition" />
              </Link>
              <Link href="https://www.instagram.com/emai.conference" target="_blank">
                <Instagram size={26} className="hover:text-[#f9e604] transition" />
              </Link>
              <Link href="https://x.com/emai_conference" target="_blank">
                <FaXTwitter size={26} className="hover:text-[#f9e604] transition" />
              </Link>
            </div>

            <div className="flex items-center space-x-2 text-white/70">
              <Copyright size={18} />
              <p>2025</p>
              <Button variant="default" className='bg-brand-yellow text-brand-gray rounded-full hover:bg-brand-yellow/90'>
                <Link href="/team" className="">EMAI Team</Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}