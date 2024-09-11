import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Searchbar() {
  return (
    <form className="relative w-[450px]">
      <div className="relative">
        <div className="absolute right-1 top-1/2 bg-primary-900">
          <MagnifyingGlassIcon />
        </div>
      </div>
    </form>
  );
}

export default Searchbar;
