import Link from 'next/link'
import { Frown } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto px-4 text-center">
            <div className="flex flex-row gap-3">
                <h1 className="text-4xl sm:text-5xl text-brand-yellow font-jingleberry mb-4">Oops Page Not Found!</h1>
                <Frown className="w-12 h-12" />
            </div>
            <p className="text-lg text-brand-red font-montserrat mb-6">
                Sorry, we couldn&apos;t find the page you were looking for...
            </p>
            <Link href="/" className="text-brand-gray font-jingleberry text-3xl hover:underline transition-colors">Back Home</Link>
        </div>
    );
}