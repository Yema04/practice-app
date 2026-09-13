"use client";

import Link from "next/link";
import { useState } from "react";

function UserCard({ title, name, role }) {
    const [likes, setLikes] = useState(0);

    return (
        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg hover:border-gray-500 transition">
            
            {/* Clickable card content */}
            <Link
                href={`/team/${encodeURIComponent(name)}`}
                className="block p-6"
            >
                <h2 className="text-xl font-semibold mb-2 text-gray-100">
                    {title} {name}
                </h2>

                <p className="text-gray-400">
                    {role}
                </p>
            </Link>

            {/* Like Section */}
            <div className="flex justify-end items-center px-6 pb-6 gap-3">
                <p className="text-gray-100">
                    Likes: {likes}
                </p>

                <button
                    onClick={() => setLikes(likes + 1)}
                    className="px-4 py-1 bg-gray-600 rounded-lg hover:bg-red-500"
                >
                    Like
                </button>
            </div>
        </div>
    );
}

export default UserCard;