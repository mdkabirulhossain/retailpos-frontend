
"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
            {/* The background matches the page to "cut" the line behind it */}
            <div className="flex items-center justify-between w-full max-w-4xl h-14 px-6 bg-[#f7f5f3] border border-gray-300/60 rounded-full shadow-sm pointer-events-auto">

                {/* Left Side: Logo and Links */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="text-xl font-semibold text-slate-900 tracking-tight" onClick={() => setIsOpen(false)}>
                        ShopPulse
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

                {/* Right Side: Action Button & Mobile Menu Toggle */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:block px-5 py-2 text-sm font-medium text-slate-900 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all shadow-sm">
                        Log in
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-3 w-full max-w-4xl bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg p-3 flex flex-col gap-1 pointer-events-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <Link
                        href="#products"
                        className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-gray-50/80 px-4 py-3 rounded-xl transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Products
                    </Link>
                    <Link
                        href="#pricing"
                        className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-gray-50/80 px-4 py-3 rounded-xl transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#docs"
                        className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-gray-50/80 px-4 py-3 rounded-xl transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Docs
                    </Link>
                    <div className="my-1 border-t border-gray-200/50" />
                    <button className="w-full text-left px-4 py-3 text-sm font-medium text-slate-900 hover:bg-gray-50/80 rounded-xl transition-colors">
                        Log in
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;