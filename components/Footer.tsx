import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">QuizSphere</h2>
          <p className="text-sm text-white">
            Building in public at{" "}
            <a
              href="https://twitter.com/soyam_mangla"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline "
            >
              @soyam
            </a>
          </p>
        </div>

        {/* Features */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link href="/" className="transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/createquiz" className="transition">
                Create Quiz
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a
                href="https://www.linkedin.com/in/soyam-mangla-432b13365/"
                target="_blank"
                className="transition"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://x.com/soyam_mangla"
                target="_blank"
                className="transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/soyammangla"
                target="_blank"
                className="transition"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Others */}
        <div className="ml-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Others</h3>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <Link href="/about" className="transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className=" transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} QuizSphere. Crafted with ❤️ by{" "}
        <a
          href="https://twitter.com/soyam_mangla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold hover:underline"
        >
          soyam
        </a>
      </div>
    </footer>
  );
}
