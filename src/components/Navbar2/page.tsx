"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-gray-900">Bandage</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="text-gray-700 hover:text-gray-900">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/FeaturePost" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/Contactus" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/pages" className="text-gray-700 hover:text-gray-900">
              Pages
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/login" className="text-blue-600 hover:text-blue-800">
            Login / Register
          </Link>
          <Link href="/search">
            <span className="text-gray-500 hover:text-gray-800">🔍</span>
          </Link>
          <Link href="/cart">
            <span className="text-gray-500 hover:text-gray-800">🛒 1</span>
          </Link>
          <Link href="/wishlist">
            <span className="text-gray-500 hover:text-gray-800">❤️ 1</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 bg-gray-50 space-y-2 p-4">
          <li>
            <Link href="/home" className="block text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="block text-gray-700">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="block text-gray-700">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="block text-gray-700">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block text-gray-700">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/pages" className="block text-gray-700">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/login" className="block text-blue-600">
              Login / Register
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
