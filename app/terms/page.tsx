import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Terms and Conditions
      </h1>
      <p className="mb-10 text-center text-sm sm:text-base leading-relaxed">
        Welcome to QuizSphere! These Terms and Conditions outline the rules and
        regulations for using our platform. By accessing or using QuizSphere,
        you agree to comply with these terms.
      </p>

      {/* 1. Acceptance */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          By accessing QuizSphere, you agree to these Terms and Conditions. If
          you do not agree, please do not use our services.
        </p>
      </div>

      {/* 2. Use of Platform */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          2. Use of Platform
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-2 mt-2 text-sm sm:text-base">
          <li>You must provide accurate information when registering.</li>
          <li>Do not misuse or disrupt the platform or services.</li>
          <li>Respect other users and maintain a friendly environment.</li>
        </ul>
      </div>

      {/* 3. Intellectual Property */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          3. Intellectual Property
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          All content, quizzes, logos, and materials on QuizSphere are owned by
          QuizSphere and protected by copyright laws. You may not reproduce or
          distribute content without permission.
        </p>
      </div>

      {/* 4. User Content */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          4. User Content
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Any content you submit, such as comments or quiz suggestions, must not
          violate any laws or rights of others. QuizSphere reserves the right to
          remove inappropriate content.
        </p>
      </div>

      {/* 5. Limitation of Liability */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3">
          5. Limitation of Liability
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          QuizSphere is provided {`"as is."`} We are not liable for any damages
          arising from use of the platform, including errors, downtime, or loss
          of data.
        </p>
      </div>

      <div className="text-center mt-8 hover:underline">
        <Link
          href="/"
          className="inline-block px-5 sm:px-6 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black font-semibold text-sm sm:text-base transition-colors duration-300"
        >
          Back to QuizSphere
        </Link>
      </div>
    </section>
  );
}
