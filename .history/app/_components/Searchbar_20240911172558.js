function Searchbar() {
  return (
    <form className="relative w-[500px]">
      <div className="relative">
        <input
          type="search"
          placeholder="Type here"
          className="bg-slate-800 w-full rounded-full border-2 border-accent-500 p-4"
        />
      </div>
    </form>
  );
}

export default Searchbar;
