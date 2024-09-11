function Searchbar() {
  return (
    <form className="relative w-[450px]">
      <div className="relative">
        <input
          type="search"
          placeholder="Type here"
          className="bg-slate-800 border-1 w-full rounded-full border-accent-200 bg-primary-50 p-3"
        />
      </div>
    </form>
  );
}

export default Searchbar;
