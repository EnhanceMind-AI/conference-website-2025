import Link from "next/link";
import Image from "next/image";
import { Menu } from 'lucide-react';
import Avatar from "../../public/Avatar.jpeg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { Instagram, Youtube, Mail } from 'lucide-react'

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xs">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link href={"/"}>
                        <Image
                            src={Avatar}
                            alt="EnhanceMind AI Logo"
                            className="object-cover rounded-full"
                            width={80}
                            height={80}
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex items-center space-x-8">
                    <li>
                        <Link href="/#" className="text-white hover:text-[#FBAE04]">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/#" className="text-white hover:text-[#FBAE04]">
                            Speakers
                        </Link>
                    </li>
                    <li>
                        <Link href="/#" className="text-white hover:text-[#FBAE04]">
                            Schedule
                        </Link>
                    </li>
                    <li>
                        <Link href="/#" className="text-white hover:text-[#FBAE04]">
                            Packages
                        </Link>
                    </li>
                    <li>
                        <Link href="/#" className="text-white hover:text-[#FBAE04]">
                            Sponsors
                        </Link>
                    </li>
                    <li>
                        <Link href="/#" className="text-white hover:text-[#FBAE04]">
                            Previous
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="text-white p-2 hover:bg-[#0F0A43] rounded-lg cursor-pointer">
                                <Menu size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-[#0F0A43] pl-6">
                            <div className="mt-6 flex flex-col space-y-4">
                                <Link href="/#" className="text-white hover:text-[#FBAE04]">
                                    About
                                </Link>
                                <Link href="/#" className="text-white hover:text-[#FBAE04]">
                                    Speakers
                                </Link>
                                <Link href="/#" className="text-white hover:text-[#FBAE04]">
                                    Schedule
                                </Link>
                                <Link href="/#" className="text-white hover:text-[#FBAE04]">
                                    Packages
                                </Link>
                                <Link href="/#" className="text-white hover:text-[#FBAE04]">
                                    Sponsors
                                </Link>
                                <Link href="/#" className="text-white hover:text-[#FBAE04]">
                                    Previous
                                </Link>
                            </div>


                            <div className="flex justify-center space-x-6 mt-auto mb-6">
                                <Link href="mailto:organizers@emaiconference.com">
                                    <Mail size={28} className="text-white hover:text-[#FBAE04] transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link href="https://www.youtube.com/@emaiconference" target="_blank">
                                    <Youtube size={28} className="text-white hover:text-[#FBAE04] transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/emai-conference" target="_blank">
                                    <FaLinkedin size={26} className="text-white hover:text-[#FBAE04] transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link href="https://www.instagram.com/emai.conference" target="_blank">
                                    <Instagram size={26} className="text-white hover:text-[#FBAE04] transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link href="https://x.com/emai_conference" target="_blank">
                                    <FaXTwitter size={26} className="text-white hover:text-[#FBAE04] transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}