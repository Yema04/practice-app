import UserCard from "@/component/UserCard"

export default function TeamPage(){
    const teamMembers = [
    { title: "(Engr.)", name: "Yemaren", role: "Software Engineer" },
    { title: "(Mr.)", name: "Paul", role: "Python Developer" },
    { title: "(Mr.)", name: "Peace Adedayo", role: "Mobile app Engineer" },
    { title: "(Snr. Engr.)", name: "Peter Enoch", role: "Mmarketting manager/Wholeseller"},
    { title: "(Past.)", name: "Philip Odumakin", role: "General manager"},
    { title: "(Prof.)",  name: "Oladejo Emmanuel", role: "UI/UX Designer"}
  ];

    return(
        <main className="p-8 bg-gray-900 min-h-screen text-white">
            <h1 className="text=3xl font-bold">
                Our Team
            </h1>
            <p className="mt-4 text-gray-400 mb-3">
                Meet our team members.
            </p>
            <div className= "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {teamMembers.map((member, index)=>(
                    <UserCard
                    key={index}
                    name={member.name}
                    role={member.role}
                    title={member.title}
                    />
                ))}
            </div>

        </main>
    )
}