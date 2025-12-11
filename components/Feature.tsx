import { CardHoverEffectDemo } from "./Cards";

const Feature = () => {
  return (
    <section className="w-full py-12 sm:py-14 md:py-16 bg-white text-black dark:bg-black dark:text-white mt-6 mb-18 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300">
          How It Works
        </h3>
        <div className="mt-6 sm:mt-8 md:mt-10">
          <CardHoverEffectDemo />
        </div>
      </div>
    </section>
  );
};

export default Feature;
