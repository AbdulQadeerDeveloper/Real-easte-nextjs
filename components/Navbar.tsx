"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#302e2e] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-4 px-4 md:px-6 lg:px-10 h-[71.1875px]">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/imgi_25_banner.1a3c8a0a448e8e24f6a0.png"
            alt="RentUP Logo"
            width={100}
            height={38.31}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 font-semibold text-white items-center">
          <Link href="/">Residencies</Link>
          <Link href="#ourvalue">Our Value</Link>
          <Link href="#contactUs">Contact Us</Link>
          <Link href="#getStarted">Get Started</Link>
          <Link
            href="#contactUs"
            className="bg-[#0000FF] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-3xl text-white"
          aria-label="Open Menu"
        >
          <IoMdMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1d1d1d] text-white z-[60] flex flex-col">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
            <Image
              src="/assets/imgi_25_banner.1a3c8a0a448e8e24f6a0.png"
              alt="RentUP Logo"
              width={140}
              height={40}
            />
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl"
              aria-label="Close Menu"
            >
              <IoMdClose />
            </button>
          </div>

          <nav className="flex flex-col px-6 space-y-6 text-lg font-medium mt-6 overflow-y-auto">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Residencies
            </Link>
            <Link href="/ourvalue" onClick={() => setIsOpen(false)}>
              Our Value
            </Link>
            <Link href="/contactUs" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <Link href="/getStarted" onClick={() => setIsOpen(false)}>
              Get Started
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-full text-center w-fit hover:bg-blue-700 transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
