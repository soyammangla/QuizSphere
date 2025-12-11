import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
      <HoverEffect items={features} />
    </div>
  );
}

export const features = [
  {
    title: "Custom Quiz Creation",
    description:
      "Easily create your own quizzes with title, description, category, difficulty, and unlimited questions.",
    link: "#",
  },
  {
    title: "Multiple Choice Questions",
    description:
      "Each quiz supports multiple choice questions with options and one correct answer.",
    link: "#",
  },
  {
    title: "Real-time Progress Tracking",
    description:
      "Track which question you're on and see your progress while attempting a quiz.",
    link: "#",
  },
  {
    title: "Instant Results",
    description:
      "Get your score immediately after finishing the quiz along with correct and incorrect answers.",
    link: "#",
  },
  {
    title: "Modern Dual UI",
    description:
      "Enjoy a sleek, minimal interface supporting both dark & light modes across all devices seamlessly.",
    link: "#",
  },
  {
    title: "Secure Authentication",
    description:
      "Login and register securely to save and attempt quizzes anytime with your account.",
    link: "#",
  },
];
