export default function POSPage() {
  return (
    <div className="flex h-full gap-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Point of Sale</h1>
        {/* Product Grid placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="aspect-square bg-muted rounded-lg border flex items-center justify-center p-4 text-center text-xs">
              Product {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="w-80 bg-card border rounded-xl p-4 hidden xl:block">
        <h2 className="font-bold border-b pb-2 mb-4">Current Order</h2>
        <div className="text-muted-foreground text-sm text-center py-20">
          Cart is empty
        </div>
      </div>
    </div>
  );
}
