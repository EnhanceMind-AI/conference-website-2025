import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/public/Navbar"
import Footer from "@/components/public/Footer"
import { Montserrat } from "next/font/google"
import localFont from "next/font/local"


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const jingleberry = localFont({
  src: "../assets/Jingleberry.otf",
  variable: "--font-jingleberry",
});

export const metadata: Metadata = {
  title: "EnhanceMind AI"
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${jingleberry.variable}`}>
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}