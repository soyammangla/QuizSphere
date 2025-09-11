import { Brain, Settings, Share2 } from "lucide-react";

const Feature = () => {
  return (
    <section className="w-full py-16 bg-black text-white mt-6 mb-18">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300">
          How It Works
        </h3>
        <h6 className="text-gray-300 mb-12 text-lg md:text-xl">
          Creating the perfect quiz has never been easier with our streamlined
          process.
        </h6>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10 px-4 md:px-0">
          {/* Step 1 */}
          <div className="bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Brain className="w-12 h-12 mb-5 stroke-blue-500" />
            <h4 className="text-2xl font-bold mb-3 text-white">
              Enter Your Topic
            </h4>
            <p className="text-gray-300 text-base leading-relaxed">
              Type in the subject you want to create a quiz about. Our AI will
              handle the rest.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Settings className="w-12 h-12 mb-5 stroke-green-500" />
            <h4 className="text-2xl font-bold mb-3 text-white">
              Customize Options
            </h4>
            <p className="text-gray-300 text-base leading-relaxed">
              Choose the difficulty, question type, and other preferences to
              tailor your quiz.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <Share2 className="w-12 h-12 mb-5 stroke-purple-500" />
            <h4 className="text-2xl font-bold mb-3 text-white">
              Generate & Share
            </h4>
            <p className="text-gray-300 text-base leading-relaxed">
              Instantly generate your quiz and share it with students, friends,
              or colleagues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
