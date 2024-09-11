import Image from "next/image";
import Button from "./Button";

function TeamCard({ team }) {
  return (
    // team card container
    <div className="flex flex-col items-center">
      {/* image container */}
      <div className="mb-8 w-1/2">
        <Image
          src={team.imageUrl}
          alt={team.name}
          width={190}
          height={190}
          className="h-auto w-full object-cover"
        />
      </div>
      {/* contents */}
      <div className="flex flex-col items-center gap-y-2 text-center md:gap-y-4">
        <p className="text-base md:text-lg">{team.name}</p>
        <Button href="#">View More</Button>
      </div>
    </div>
  );
}

export default TeamCard;
