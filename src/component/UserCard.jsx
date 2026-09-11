"use client";
import Link from "next/link";

import { useState } from "react";

function UserCard({ title, name, role }) {
  const [likes, setLikes] = useState(0);
  return (
    <div className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-lg hover:border-gray-500">
      <Link href={} className="text-xl font-semibold mb-2 text-gray-100">
        {" "}
        {title} {name}{" "}
      </Link>
      <p className="text-gray-400">{role}</p>


      {/* Like Section */}
      <div className= "flex justify-end items-center mt-4 gap-3">
        <p className="text-gray-100">
          Likes: {likes} 
        </p>
          <button
            onClick={() => setLikes(likes + 1)}
            className="px-4 py-1 bg-blue-600 rounded-lg hover:bg-red-500"
          >
            Like
          </button>
          <Link href={`/team/${name}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-100">
            {name}
          </h3>
          </Link>
      </div>
    </div>
  );
}

export default UserCard;
