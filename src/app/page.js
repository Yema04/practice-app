import Image from "next/image";
import React from "react";


function UserCard({title, name, role }) {
  return(
    <div>
      <h1> {name} </h1>
      <p> {role} </p>
    </div>
  )
}




export default function Home() {
  const teamMembers = [
    { name: "Yemaren", role: "Software Engineer" },
    { name: "Paul", role: "Python Developer" },
    { name: "Peace Adedayo", role: "Mmobile app Engineer" },
    { name: "Peter Enoch", role: "Mmarketting manager/Wholeseller"},
    { name: "Philip Odumakin", role: "General manager"},
    { name: "Oladejo Emmanuel", role: "UI/UX Designer"}
  ];
  return (
    <main className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className= "text-3xl font-bold mb-8">Team Members</h1>
    <div className= "grid grid cols-1 sm:grid-cols-3 md grid-col-4,  gap-6">
      {teamMembers.map((member, index)=> (
        <div key={index} className="p-6 bg-gray-800 rounded-xl boroder border-gray-700 shadow-lg hover:border-gray-500 transtion-vcolors">
          <h3 className="text-xl font-semibold mb-2 text-gray-100">{member.name}</h3>
          <p className="text-gray-400">{member.role}</p>
        </div>
      ))}
    </div>
    </main>
  );
}

