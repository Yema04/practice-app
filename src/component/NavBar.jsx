import Link from "next/link"

export default function NavBar(){
    return(
        <nav className="bg-gray-950 border-b border-gray-800 px-8 py-4">
            <div className="mx-auto max-w-6xl flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-white">
                MyWebsite
                </Link>
                <div className="flex gap-6">
                    <Link href="/" className="text-gray-300 hover:text-white transition"> 
                    Home
                    </Link>
                    <Link href="/team" className="text-gray-300 hover:text-white transition">
                    Team
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white transition">
                    About
                    </Link>
                </div>
            </div>
        </nav>
    )
}