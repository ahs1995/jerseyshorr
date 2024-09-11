function Searchbar() {
  return (
    <form className="relative w-[450px]">
      <div className="relative">
        <input
          type="search"
          placeholder="Search..."
          className="bg-slate-800 w-full rounded-full bg-primary-50 p-3"
        />
      </div>
    </form>
  );
}

export default Searchbar;
