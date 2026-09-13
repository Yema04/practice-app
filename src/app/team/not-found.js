import Link from "next/link"

export default function NotFound(){
    return(
        <main className="min-h-screen bg-gray-950 px-6 text-white flex items-center justify-center">
            <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    404
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight">
                    Team Member not found
                </h1>

                <p className="mt-4 text-gray-400">
                    The team member you are looking for doesn't exist
                </p>
                <div className="mt-4 flex justify-center gap-4">

                <Link href="/team" className="mt-8 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-200 mr-4"
                >
                Back to team
                </Link>
                <Link href="/" className="mt-8 inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-200 "
                >
                Back to Home
                </Link>
                </div>
                    
            </div>
        </main>
    );
} 