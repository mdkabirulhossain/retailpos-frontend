
const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 pt-20 overflow-hidden">
      {/* Hero Content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="text-6xl md:text-7xl font-serif text-[#33312e] leading-[1.1] mb-8 tracking-tight">
          Effortless custom contract <br /> billing by Brillance
        </h1>

        <p className="text-lg md:text-xl text-[#6b6967] max-w-2xl mx-auto mb-10 leading-relaxed">
          Streamline your billing process with seamless automation <br className="hidden md:block" />
          for every custom contract, tailored by Brillance.
        </p>

        <button className="bg-[#33312e] text-[#f7f5f3] px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all shadow-lg active:scale-95">
          Start for free
        </button>
      </div>

      {/* Soft Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-200/20 blur-[120px] rounded-full -z-0" />
    </section>
  );
};

export default Hero;