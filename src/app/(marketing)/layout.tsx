 import Navbar from "@/src/components/marketing/navbar/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-marketing selection:bg-orange-100 relative">
      {/* 1. Fixed Navigation Bar */}
      <Navbar />

      {/* 2. Main Content Container with Side Borders */}
      <div className="max-w-360 mx-auto border-x border-gray-300/40 min-h-screen relative bg-marketing">
        
        {/* Horizontal Line: This is the line that goes behind the navbar */}
        {/* It is absolute so it scrolls with the container, not the window */}
        <div className="absolute top-13 left-0 w-full border-b border-gray-300/40 z-0" />

        <main className="relative z-10">
          {children}
        </main>
      </div>

      {/* Vertical Scroll Indicator (optional) */}
      <div className="fixed right-1 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-gray-400/30 rounded-full mr-1 hidden md:block" />
    </div>
  );
}