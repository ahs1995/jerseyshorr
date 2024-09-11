function Searchbar() {
  return (
    <form className="border-1 relative w-[500px]">
      <div className="relative">
        <input
          type="search"
          placeholder="Type here"
          className="bg-slate-800 w-full rounded-full p-4"
        />
      </div>
    </form>
  );
}

export default Searchbar;
