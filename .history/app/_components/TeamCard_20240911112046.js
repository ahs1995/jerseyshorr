import Image from "next/image";
import Button from "./Button";

function TeamCard({ team }) {
  return (
    // team card container
    <div className="flex flex-col items-center border-2 border-[#1f8a3e]">
      {/* image container */}
      <div className="mb-8 w-full">
        <Image
          src={team.imageUrl}
          alt={team.name}
          width={190}
          height={190}
          className="w-full object-cover"
        />
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
