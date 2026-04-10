export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar would go here */}
      <div className="flex flex-col flex-1">
        {/* Navbar would go here */}
        <main className="flex-1 overflow-y-auto p-6 bg-secondary/20">
          {children}
        </main>
      </div>
    </div>
  );
}
