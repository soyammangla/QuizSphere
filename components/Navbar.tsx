import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black dark:bg-black dark:text-white shadow-md transition-colors">
      <h1 className="text-xl font-bold">QuizSphere</h1>

      <div className="flex items-center space-x-10">
        <Link href="/" className="text-black dark:text-white">
          Home
        </Link>
        <Link href="/quiz" className="text-black dark:text-white">
          Quiz
        </Link>
        <Link href="/about" className="text-black dark:text-white">
          About
        </Link>

        {/* Light/Dark toggle button */}
        <ModeToggle />
      </div>

      <Link
        href="/signin"
        className="inline-block px-4 py-2 bg-gray-200 text-black dark:bg-neutral-800 dark:text-white rounded-lg transition-colors"
      >
        Sign In
      </Link>
    </nav>
  );
};

export default Navbar;
