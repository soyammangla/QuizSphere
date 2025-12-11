import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-8 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:gap-8 text-center sm:text-left">
        {/* QuizSphere Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-2xl font-bold mb-3">QuizSphere</h2>
          <p className="text-sm leading-relaxed">
            Building in public at{" "}
            <a
              href="https://twitter.com/soyam_mangla"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              @soyam
            </a>
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="transition-colors hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/createquiz"
                className="transition-colors hover:underline"
              >
                Create Quiz
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/soyam-mangla-432b13365/"
                target="_blank"
                className="transition-colors hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/soyam_mangla"
                target="_blank"
                className="transition-colors hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/soyammangla"
                target="_blank"
                className="transition-colors hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Others */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-semibold mb-4">Others</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="transition-colors hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="transition-colors hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm transition-colors px-4">
        © {new Date().getFullYear()} QuizSphere. Made with ❤️ by{" "}
        <a
          href="https://twitter.com/soyam_mangla"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          soyam
        </a>
      </div>
    </footer>
  );
}
