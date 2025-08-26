import Link from 'next/link'
import { FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { MapPinned, Instagram, Youtube, Mail, Copyright } from 'lucide-react'
import { Button } from '../ui/button'

export default function Footer() {
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
              <MapPinned size={30} className="text-[#da0808]" />
              <p>Dar Es Salaam, Tanzania.</p>
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