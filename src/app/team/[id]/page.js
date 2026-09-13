// import UserCard from "@/component/UserCard";
import { notFound } from "next/navigation";
import teamMembers from "@/data/teamMembers";



export default async function MemberPage({ params }){
    const { name } = await params;

    const decodedName = decodeURIComponent(name);

    const member = teamMembers.find(
        (person) => person.name.toLowerCase() === decodedName.toLowerCase()
    );

    if(!member){
        notFound();
    }

    return(
        <main className="p-8 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl mb-4 font-bold">
                Team Member
            </h1>
            <div className= "mb-3 bg-gray-800 p-6 rounded-xl border border-gray-700 min-w-md ">
            <h2 className="text-2xl font-semibold tracking-tight">
                {member.title} { member.name }
            </h2>
            <p className="mt-3 text-lg text-gray-400">
                {member.role}
            </p>
            <p className="text-xl text-gray-400">
                {member.id}
            </p>
            </div>
        </main>
    )
}