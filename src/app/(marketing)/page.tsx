export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100-80px)] p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to RetailPOS</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl">
        The ultimate point of sale solution for modern retail businesses. 
        Manage products, sales, and members with ease.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium">
          Get Started
        </button>
        <button className="px-6 py-2 border rounded-md font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
}
