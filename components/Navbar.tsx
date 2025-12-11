"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-agri-green">
              Example<span className="text-agri-earth">Store</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-agri-green font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-agri-green transition-colors"
            >
               <ShoppingCart className="w-6 h-6" />
               {/* Cart Badge Simulator */}
               <span className="absolute top-0 right-0 h-4 w-4 bg-agri-earth text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                 0
               </span>
            </Link>
            <Link
              href="/shop"
              className="bg-agri-green text-white px-5 py-2 rounded-btn font-medium hover:bg-agri-dark transition-colors shadow-sm cursor-pointer"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-agri-green p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={clsx(
          "md:hidden absolute w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-agri-green hover:bg-agri-light"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100 mt-4">
             <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full bg-agri-green text-white px-5 py-3 rounded-btn font-medium hover:bg-agri-dark transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
