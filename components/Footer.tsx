import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 hover:text-blue-500">
            QuizSphere
          </h2>
          <p className="text-sm text-gray-400">
            Building in public at{" "}
            <a
              href="https://twitter.com/soyam_mangla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline "
            >
              @soyammangla
            </a>
          </p>
        </div>

        {/* Features */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/createquiz" className="hover:text-white transition">
                Create Quiz
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/soyam-mangla-432b13365/"
                target="_blank"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/soyam_mangla"
                target="_blank"
                className="hover:text-white transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/soyammangla"
                target="_blank"
                className="hover:text-white transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Others */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Others</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} QuizSphere. Crafted with ❤️ by{" "}
        <a
          href="https://twitter.com/soyam_mangla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          @soyammangla
        </a>
      </div>
    </footer>
  );
}
