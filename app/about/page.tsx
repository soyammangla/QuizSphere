import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-10 sm:pt-14 justify-center min-h-screen flex bg-white text-black dark:bg-black dark:text-white transition-colors px-4 sm:px-6">
      <div className="max-w-4xl w-full text-center">
        <h3 className="font-bold text-3xl sm:text-4xl mb-6 sm:mb-10">
          About QuizSphere
        </h3>

        <div className="mt-6 sm:mt-10 flex flex-col md:flex-row items-center">
          <Image
            src="/quiz.jpeg"
            alt="QuizSphere"
            width={100}
            height={100}
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain rounded-2xl shadow-lg md:mr-5 mb-5 md:mb-0"
          />
          <p className="max-w-3xl text-left text-base sm:text-lg leading-relaxed">
            QuizSphere is a modern platform designed to make learning fun and
            interactive. <br />
            Whether you’re a student, a professional, or just curious, our
            quizzes help you learn, test, and grow in an engaging way. <br />
            We believe in {`"learning by doing"`}, so every quiz is built to
            challenge and entertain while educating. <br />
            With a smooth user experience and gamified elements, QuizSphere
            makes studying more exciting. <br />
            Our vision is to create a global hub where knowledge meets curiosity
            — and fun becomes part of learning.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-12 sm:mt-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-6 mb-12">
            <a
              href="https://github.com/soyammangla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={28}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/soyam-mangla-432b13365/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={28}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              href="https://x.com/soyam_mangla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                size={28}
                className="hover:scale-110 transition-transform duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
