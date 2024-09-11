import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

function Searchbar() {
  return (
    <form className="relative w-[450px]">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="bg-slate-800 w-full rounded-full bg-primary-50 px-6 py-3 outline-none"
        />
        <button className="absolute right-1 top-1">
          <MagnifyingGlassCircleIcon className="h-10 w-10 bg-accent-500" />
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
