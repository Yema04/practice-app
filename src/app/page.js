import React from "react";
import UserCard from  "../component/UserCard";
import Link from "next/link"



export default function Home() {
  const teamMembers = [
    { title: "(Engr.)", name: "Yemaren", role: "Software Engineer" },
    { title: "(Mr.)", name: "Paul", role: "Python Developer" },
    { title: "(Mr.)", name: "Peace Adedayo", role: "Mobile app Engineer" },
    { title: "(Snr. Engr.)", name: "Peter Enoch", role: "Mmarketting manager/Wholeseller"},
    { title: "(Past.)", name: "Philip Odumakin", role: "General manager"},
    { title: "(Prof.)",  name: "Oladejo Emmanuel", role: "UI/UX Designer"}
  ];
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
      className="inline-block mt-6 px-5 py-2 bg-blue-600 rounded-lg hover:bg-red-500"
      >
      View Team
      </Link>
    </main>
  );
}

