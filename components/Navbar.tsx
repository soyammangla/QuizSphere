const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black shadow-md mx-30">
      <h1 className="text-xl font-bold">QuizSphere</h1>

      <div className="flex space-x-10 ml-180">
        <a href="/" className="text-white-700 hover:text-blue-600">
          Home
        </a>
        <a href="/quiz" className="text-white-700 hover:text-blue-600">
          Quiz
        </a>
        <a href="/about" className="text-white-700 hover:text-blue-600">
          About
        </a>
        <a href="/profile" className="text-white-700 hover:text-blue-600">
          Profile
        </a>
      </div>

      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
