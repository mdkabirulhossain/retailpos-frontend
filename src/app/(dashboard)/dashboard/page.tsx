export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-6 bg-card rounded-xl border shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Metric {i}</h3>
            <p className="text-2xl font-bold mt-2">Value {i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
