
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/1c3c535938f3c6e22afabbe75a349969/1960a0acf72408f9e55d403eeec365a8.png" 
                alt="Courage Taekwondo Academy India Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">Courage Taekwondo Academy</h1>
              <p className="text-sm text-gray-600">Mathura, India</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-black hover:text-blue-600 font-medium cursor-pointer">Home</Link>
            <Link href="#about" className="text-black hover:text-blue-600 font-medium cursor-pointer">About</Link>
            <Link href="#programs" className="text-black hover:text-blue-600 font-medium cursor-pointer">Programs</Link>
            <Link href="#contact" className="text-black hover:text-blue-600 font-medium cursor-pointer">Contact</Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer">
              Join Now
            </button>
          </nav>
          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl text-black"></i>
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="#home" className="text-black hover:text-blue-600 font-medium cursor-pointer">Home</Link>
              <Link href="#about" className="text-black hover:text-blue-600 font-medium cursor-pointer">About</Link>
              <Link href="#programs" className="text-black hover:text-blue-600 font-medium cursor-pointer">Programs</Link>
              <Link href="#contact" className="text-black hover:text-blue-600 font-medium cursor-pointer">Contact</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap cursor-pointer w-fit">
                Join Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
