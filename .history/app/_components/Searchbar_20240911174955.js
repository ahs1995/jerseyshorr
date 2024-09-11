import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

function Searchbar() {
  return (
    <form className="relative w-[450px]">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="bg-slate-800 w-full rounded-full px-6 py-3 outline-none"
        />
        <button className="absolute right-[50%] top-[50%]">
          <MagnifyingGlassCircleIcon />
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
