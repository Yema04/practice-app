import React from "react";
import UserCard from  "@/component/UserCard";
import Link from "next/link"
import teamMembers from "@/data/teamMembers";



export default function Home() {
 
  return (
    <main className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className= "text-3xl font-bold mb-8">Team Members</h1>
    <div className= "grid grid-cols-1 sm:grid-cols-3 md:grid-col-4,  gap-6">
      {teamMembers.map((member, index)=> (
        <UserCard
        key = {index}
        title= {member.title}
        name = {member.name}
        role = {member.role}
        />
      ))}
    </div>
      <Link
      href="/team"
      className="inline-block mt-6 px-5 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
      >
      View Team
      </Link>
    </main>
  );
}

