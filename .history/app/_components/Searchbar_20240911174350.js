import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Searchbar() {
  return (
    <form className="relative w-[450px]">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="bg-slate-800 w-full rounded-full bg-primary-50 px-6 py-3 outline-none"
        />
        <button className="absolute right-1 top-1/2 bg-primary-900">
          <MagnifyingGlassIcon />
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
