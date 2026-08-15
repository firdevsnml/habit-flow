const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <span className="text-3xl">
            🌱
          </span>

          <h1 className="text-2xl font-bold text-green-600">
            HabitFlow
          </h1>
        </div>

        <div className="flex gap-5 text-sm font-medium">
          <a
            href="#"
            className="hover:text-green-600"
          >
            Ana Sayfa
          </a>

          <a
            href="#habits"
            className="hover:text-green-600"
          >
            Alışkanlıklar
          </a>

          <a
            href="#statistics"
            className="hover:text-green-600"
          >
            İstatistikler
          </a>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;