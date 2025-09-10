import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black shadow-md mx-30">
      <h1 className="text-xl font-bold text-white">QuizSphere</h1>

      <div className="flex space-x-10 ml-180">
        <Link href="/" className="text-white hover:text-blue-600">
          Home
        </Link>
        <Link href="/quiz" className="text-white hover:text-blue-600">
          Quiz
        </Link>
        <Link href="/about" className="text-white hover:text-blue-600">
          About
        </Link>
        <Link href="/profile" className="text-white hover:text-blue-600">
          Profile
        </Link>
      </div>

      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
