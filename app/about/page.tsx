import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-14 justify-center min-h-screen flex">
      <div className="max-w-4xl px-6 text-center">
        {" "}
        <h3 className="font-bold text-white text-4xl">About QuizSphere</h3>{" "}
        <div className="mt-10 flex items-center">
          {" "}
          <img
            src="/quiz.jpeg"
            alt="QuizSphere"
            className="w-100 h-100 object-contain rounded-2xl shadow-lg mr-5"
          />{" "}
          <p className="text-white max-w-3xl text-left text-lg ml-5">
            {" "}
            QuizSphere is a modern platform designed to make learning fun and
            interactive. <br /> Whether you’re a student, a professional, or
            just curious, our quizzes help you learn, test, and grow in an
            engaging way. <br /> We believe in “learning by doing”, so every
            quiz is built to challenge and entertain while educating. <br />{" "}
            With a smooth user experience and gamified elements, QuizSphere
            makes studying more exciting. <br /> Our vision is to create a
            global hub where knowledge meets curiosity — and fun becomes part of
            learning.{" "}
          </p>{" "}
        </div>
        {/* Social Links */}
        <div className="mt-16 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">
            Connect With Us
          </h2>

          <div className="flex justify-center space-x-6 text-white">
            <a
              href="https://github.com/soyammangla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/soyam-mangla-432b13365/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://x.com/soyam_mangla"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
