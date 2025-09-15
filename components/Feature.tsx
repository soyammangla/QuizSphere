import { CardHoverEffectDemo } from "./Cards";

const Feature = () => {
  return (
    <section className="w-full py-16 bg-black text-white mt-6 mb-18">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300">
          How It Works
        </h3>

        <CardHoverEffectDemo />
      </div>
    </section>
  );
};

export default Feature;
