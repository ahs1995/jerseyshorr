import Image from "next/image";
import Button from "./Button";

function TeamCard({ team }) {
  return (
    <div className="mb-10 flex h-auto w-40 flex-col justify-between gap-y-8">
      <div className="h- w-25 h-40 overflow-hidden">
        <Image src={team.imageUrl} alt={team.name} width={100} height={100} />
      </div>

      <div className="flex flex-col items-center gap-y-2">
        <Button href="#">View More</Button>
        <p className="text-lg font-medium">{team.name}</p>
      </div>
    </div>
  );
}

export default TeamCard;
