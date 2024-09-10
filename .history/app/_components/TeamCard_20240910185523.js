import Image from "next/image";
import Button from "./Button";

function TeamCard({ team }) {
  return (
    // team card container
    <div className="mb-10">
      {/* image container */}
      <div className="mb-8 border-2 border-[#ff4b4b]">
        <Image src={team.imageUrl} alt={team.name} width={120} height={120} />
      </div>
      {/* contents */}
      <div className="flex flex-col items-center gap-y-2">
        <p>{team.name}</p>
        <Button href="#">View More</Button>
      </div>
    </div>
  );
}

export default TeamCard;
