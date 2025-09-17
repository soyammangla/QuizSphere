import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-6 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-3">QuizSphere</h2>
          <p className="text-sm">
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

        <div className="ml-auto">
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/createquiz" className="transition-colors">
                Create Quiz
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="ml-auto">
          <h3 className="text-lg font-semibold mb-4">Social</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/soyam-mangla-432b13365/"
                target="_blank"
                className="transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/soyam_mangla"
                target="_blank"
                className="transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/soyammangla"
                target="_blank"
                className="transition-colors"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="ml-auto">
          <h3 className="text-lg font-semibold mb-4">Others</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-12 pt-6 text-center text-sm transition-colors">
        © {new Date().getFullYear()} QuizSphere. Crafted with ❤️ by{" "}
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
