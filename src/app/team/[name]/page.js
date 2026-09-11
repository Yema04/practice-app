"use client";

import { use } from "react";

export default function MemberPage({ params }){
    const resolvedParams= use(params);
    return(
        <main className="p-8 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl font-bold">
                Team Member
            </h1>
            <p className="mt-2 text-gray-400">
                { resolvedParams.name }
            </p>
        </main>
    )
}