'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary-desert to-primary-sun text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-2">
              {/* Placeholder for logo - in production would use an actual image */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-sun rounded-full"></div>
              </div>
            </div>
            <Link href="/" className="text-xl font-bold">
              Henderson Solar Solutions
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:opacity-80 transition-opacity font-medium">
              Home
            </Link>
            <Link href="/benefits" className="hover:opacity-80 transition-opacity font-medium">
              Benefits
            </Link>
            <Link href="/about" className="hover:opacity-80 transition-opacity font-medium">
              About
            </Link>
            <Link href="/contact" className="hover:opacity-80 transition-opacity font-medium">
              Contact
            </Link>
            <Link 
              href="/request" 
              className="bg-secondary-deep-sky hover:bg-blue-600 px-4 py-2 rounded-md transition-colors font-medium"
            >
              Get Solar Info
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-3">
            <Link 
              href="/" 
              className="block hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/benefits" 
              className="block hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              href="/about" 
              className="block hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="block hover:bg-white/10 px-3 py-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="/request" 
              className="block bg-secondary-deep-sky hover:bg-blue-600 px-3 py-2 rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Solar Info
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
