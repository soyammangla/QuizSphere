import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-[460px] w-full flex flex-col justify-center items-center text-center px-4 bg-white text-black dark:bg-black dark:text-white mt-17 mb-18 sm:h-[420px] md:h-[460px] lg:h-[500px]">
      <h6 className="text-lg text-gray-800 dark:text-gray-300 mb-2 tracking-wide">
        Welcome to <span className="font-bold">QuizSphere</span>
      </h6>

      <h1 className="text-4xl md:text-7xl font-bold mb-4 max-w-4xl text-center">
        Challenge Your <br />
        Mind, One Quiz at a Time!
      </h1>

      <p className="text-gray-900 dark:text-gray-200 text-xl max-w-2xl px-2 sm:px-4">
        Explore quizzes across Coding, GK, Movies, Sports, and more. Learn,
        compete, and climb the leaderboard — every right answer takes you one
        step closer to mastery!
      </p>

      <Link
        href="/signin"
        className="inline-block mt-6 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-bold rounded-lg transition"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Hero;
