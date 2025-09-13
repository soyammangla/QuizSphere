import Link from "next/link";
export default function PrivacyPolicy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="mb-10 text-center">
        At QuizSphere, your privacy is very important to us. This Privacy Policy
        explains how we collect, use, and protect your information when you use
        our platform.
      </p>

      {/* Information We Collect */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-semibold">Personal Information:</span> Name,
            email address, or account details (only if provided).
          </li>
          <li>
            <span className="font-semibold">Usage Data:</span> Quiz scores,
            progress, and interaction data.
          </li>
          <li>
            <span className="font-semibold">Technical Data:</span> Browser type,
            device, IP address, and cookies.
          </li>
        </ul>
      </div>

      {/* How We Use Data */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          2. How We Use Your Information
        </h2>
        <p>We use the collected information to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Provide and improve our quiz services.</li>
          <li>Personalize quiz recommendations.</li>
          <li>Send updates or important notifications (if opted in).</li>
          <li>Ensure platform security and prevent misuse.</li>
        </ul>
      </div>

      {/* Sharing Data */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          3. Sharing of Information
        </h2>
        <p>
          QuizSphere does{" "}
          <span className="font-semibold">not sell, trade, or rent</span> your
          personal data. We may only share limited information with trusted
          service providers (e.g., hosting, analytics) under strict
          confidentiality.
        </p>
      </div>

      {/* Cookies */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Cookies</h2>
        <p>
          We use cookies to enhance your experience (e.g., saving login
          sessions, quiz progress). You can disable cookies in your browser
          settings, but some features may not work properly.
        </p>
      </div>

      {/* User Rights */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Access or request a copy of your data.</li>
          <li>Request correction or deletion of personal data.</li>
          <li>Withdraw consent for email/notifications at any time.</li>
        </ul>
      </div>
      <div className="text-center mt-8 hover:underline">
        <Link
          href="/"
          className="inline-block text-white font-semibold py-2 px-6 rounded-lg"
        >
          Back to QuizSphere
        </Link>
      </div>
    </section>
  );
}
