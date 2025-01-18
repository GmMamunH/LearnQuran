export const Navbar = () => {
  return (
    <nav className="py-2 shadow-sm">
      <div className=" flex items-center justify-between container mx-auto">
        <h1 className="text-2xl text-center text-slate-900 font-bold">
          Learn Quran: এসো কুরআন শিখি
        </h1>
        <div>
          <input
            className="px-4 py-2 bg-slate-100 rounded-md mr-1 border-2 border-teal-700 focus:outline-none"
            type="search" placeholder="Search by name..."
            name="search"
            id=""
          />
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-teal-700 "
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};
