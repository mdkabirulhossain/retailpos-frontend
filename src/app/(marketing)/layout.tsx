import Navbar from "@/src/components/marketing/navbar/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen selection:bg-orange-100 bg-marketing">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Main content */}
      <main>
        {children}
      </main>

      {/* Vertical Scroll Indicator */}
      <div className="fixed right-1 top-1/2 -translate-y-1/2 w-1.5 h-32 bg-gray-400/30 rounded-full mr-1 hidden md:block" />
    </div>
  );
}