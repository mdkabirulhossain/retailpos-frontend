import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center justify-between w-full max-w-4xl h-14 px-6 bg-white/70 backdrop-blur-md border border-gray-200/50 rounded-full shadow-sm">
        
        {/* Left Side: Logo and Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-semibold text-slate-900 tracking-tight">
            RetailPos
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="#products" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Products
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </Link>
            <Link href="#docs" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Docs
            </Link>
          </div>
        </div>

        {/* Right Side: Action Button */}
        <div>
          <button className="px-5 py-2 text-sm font-medium text-slate-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all shadow-sm">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;