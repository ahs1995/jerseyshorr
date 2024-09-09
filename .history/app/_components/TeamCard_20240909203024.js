import Image from "next/image";

function TeamCard({ team }) {
  return (
    <div key={team.name} className="bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Image src={team.imageUrl} alt={team.name} width={100} height={100} />
          <p className="text-lg font-medium">{team.name}</p>
        </div>
        <button className="bg-blue-500 hover: bg-blue-600 text-white rounded px-4 py-2">
          View More
        </button>
      </div>
    </div>
  );
}

export default TeamCard;
