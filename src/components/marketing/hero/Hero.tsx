
const Hero = () => {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pt-20 overflow-hidden">
            {/* Hero Content */}
            <div className="text-center max-w-4xl mx-auto z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#33312e] leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 tracking-tight px-2 sm:px-0">
                    Your Shop, Simplified. <br className="hidden sm:block" /> Modern POS & Inventory.
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-[#6b6967] max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2 sm:px-0">
                    Effortlessly manage sales, track stock in real-time, and empower your staff. The all-in-one SaaS built for the next generation of retail.
                </p>

                <button className="bg-[#33312e] text-[#f7f5f3] px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium hover:opacity-90 transition-all shadow-lg active:scale-95">
                    Start for free
                </button>
            </div>

            {/* Soft Bottom Glow Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-200/20 blur-[120px] rounded-full -z-0" />
        </section>
    );
};

export default Hero;