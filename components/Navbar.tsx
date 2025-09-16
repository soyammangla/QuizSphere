import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-black shadow-md mx-30">
      <h1 className="text-xl font-bold text-white">QuizSphere</h1>
      <div className="flex space-x-10 ml-180">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/quiz" className="text-white">
          Quiz
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
      </div>

      <Link
        href="/signin"
        className="inline-block px-4 py-2 bg-neutral-800 text-white rounded-lg transition"
      >
        Sign In
      </Link>
    </nav>
  );
};

export default Navbar;
