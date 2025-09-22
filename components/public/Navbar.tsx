'use client'

import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'
import { useRouter } from "next/navigation"
import Avatar from "../../public/Avatar.jpeg"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FaXTwitter, FaLinkedin } from "react-icons/fa6"
import { Instagram, Youtube, Mail, ChevronUp, ChevronDown, ExternalLink } from 'lucide-react'
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false); // state to control Sheet in Desktop View
    const [showPrevious, setShowPrevious] = useState(false); // state to control Sheet in Mobile View


    const handleClickLogo = (event: React.MouseEvent) => {
        event.preventDefault(); // prevent default Link navigation
        if (window.location.pathname === "/") {
            router.push("/") // reload if already on homepage
        } else {
            router.push("/"); // avigate home if on another page
        }
    }
    const handleCloseMenu = () => setIsOpen(false); // close sheet after click

    return (
        <header className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xs">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">

                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link href={"/"} onClick={handleClickLogo}>
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
                <ul className="hidden sm:flex items-center font-montserrat space-x-8">
                    <li>
                        <Link href="#about" className="text-brand-yellow hover:text-brand-yellow">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#speakers" className="text-brand-yellow hover:text-brand-yellow">
                            Speakers
                        </Link>
                    </li>
                    <li>
                        <Link href="#schedule" className="text-brand-yellow hover:text-brand-yellow">
                            Schedule
                        </Link>
                    </li>
                    <li>
                        <Link href="#packages" className="text-brand-yellow hover:text-brand-yellow">
                            Packages
                        </Link>
                    </li>
                    <li>
                        <Link href="#showcase" className="text-brand-yellow hover:text-brand-yellow">
                            Showcase
                        </Link>
                    </li>
                    <li>
                        <Link href="#sponsors" className="text-brand-yellow hover:text-brand-yellow">
                            Sponsors
                        </Link>
                    </li>
                    <li>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-brand-yellow hover:text-brand-yellow cursor-pointer">
                                Previous
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-brand-gray text-white border-none">
                                <DropdownMenuItem>
                                    <Link href="https://emaiconference.com/index.html" target="_blank">
                                        2024
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="https://emaiconference.com/2023/index.html" target="_blank">
                                        2023
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="https://emaiconference.com/2022/index.html " target="_blank">
                                        2022
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="sm:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button className="text-brand-yellow p-2 hover:bg-transparent rounded-lg cursor-pointer">
                                <Menu size={24} />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-brand-red pl-6">
                            <div className="mt-6 flex flex-col space-y-4 font-montserrat">
                                <Link href="#about" className="text-white hover:text-brand-yellow" onClick={handleCloseMenu} >
                                    About
                                </Link>
                                <Link href="#speakers" className="text-white hover:text-brand-yellow" onClick={handleCloseMenu} >
                                    Speakers
                                </Link>
                                <Link href="#schedule" className="text-white hover:text-brand-yellow" onClick={handleCloseMenu} >
                                    Schedule
                                </Link>
                                <Link href="#packages" className="text-white hover:text-brand-yellow" onClick={handleCloseMenu} >
                                    Packages
                                </Link>
                                <Link href="#showcase" className="text-white hover:text-brand-yellow" onClick={handleCloseMenu} >
                                    Showcase
                                </Link>
                                <Link href="#sponsors" className="text-white hover:text-brand-yellow" onClick={handleCloseMenu} >
                                    Sponsors
                                </Link>
                                <div className="flex flex-col space-y-2">
                                    <button className="flex items-center justify-between w-full text-white hover:text-brand-yellow text-left" onClick={() => setShowPrevious(!showPrevious)}>
                                        <span>Previous</span>
                                        {showPrevious ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                    </button>

                                    {showPrevious && (
                                        <div className="flex flex-col pl-4 text-sm space-y-3">
                                            <Link href="https://emaiconference.com/index.html" target="_blank" className="flex items-center gap-2 text-white hover:text-brand-yellow" onClick={handleCloseMenu}>
                                                2024 <ExternalLink size={14} />
                                            </Link>
                                            <Link href="https://emaiconference.com/2023/index.html" target="_blank" className="flex items-center gap-2 text-white hover:text-brand-yellow" onClick={handleCloseMenu}>
                                                2023 <ExternalLink size={14} />
                                            </Link>
                                            <Link href="https://emaiconference.com/2022/index.html" target="_blank" className="flex items-center gap-2 text-white hover:text-brand-yellow" onClick={handleCloseMenu}>
                                                2022 <ExternalLink size={14} />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* social media icons  */}
                            <div className="flex justify-center space-x-6 mt-auto mb-6">
                                <Link href="mailto:organizers@emaiconference.com">
                                    <Mail size={28} className="text-white hover:text-brand-yellow transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link href="https://www.youtube.com/@emaiconference" target="_blank">
                                    <Youtube size={28} className="text-white hover:text-brand-yellow transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link href="https://www.linkedin.com/company/emai-conference" target="_blank">
                                    <FaLinkedin size={26} className="text-white hover:text-brand-yellow transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link href="https://www.instagram.com/emai.conference" target="_blank">
                                    <Instagram size={26} className="text-white hover:text-brand-yellow transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                                <Link href="https://x.com/emai_conference" target="_blank">
                                    <FaXTwitter size={26} className="text-white hover:text-brand-yellow transform transition-transform duration-300 hover:scale-110" />
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}