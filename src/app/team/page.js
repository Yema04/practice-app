import UserCard from "@/component/UserCard";
import teamMembers from "@/data/teamMembers";

export default function TeamPage() {
    return (
        <main className="p-8 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl font-bold">
                Our Team
            </h1>

            <p className="mt-4 text-gray-400 mb-3">
                Meet our team members.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {teamMembers.map((member) => (
                    <UserCard
                        key={member.id}
                        id={member.id}
                        name={member.name}
                        role={member.role}
                        title={member.title}
                    />
                ))}
            </div>
        </main>
    );
}