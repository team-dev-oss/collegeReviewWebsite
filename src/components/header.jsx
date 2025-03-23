"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-6 md:px-20 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center text-2xl">
          <Link href="/">
            <Image src="/admonk.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-xl transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:static md:flex md:flex-row md:space-y-0 md:space-x-10 md:bg-transparent md:translate-x-0`}
        >
          {/* Close Button on Mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-3xl text-gray-700 md:hidden"
          >
            &times;
          </button>

          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/about#services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/#reviews" onClick={() => setIsOpen(false)}>
            Reviews
          </Link>
          <Link href="/#team" onClick={() => setIsOpen(false)}>
            Team
          </Link>
          <Link href="/about#contactForm" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
