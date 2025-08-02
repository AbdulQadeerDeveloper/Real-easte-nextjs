"use client";

import { FaCircle } from "react-icons/fa";
import logo from "../public/assets/logo2.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-[1300px] mx-auto bg-white py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left side */}
        <div>
           {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="RentUP Logo"
            width={100}
            height={38.31}
            className="rounded-none"
            priority
          />
        </Link>
          <p className="text-gray-500 mt-3 max-w-xs text-sm">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>

        {/* Right side */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#1F3E72]">
            Information
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            145 New York, FL 5467, USA
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-1xl font-medium text-[#1c1c1c]">
            <a href="#">Property</a>
            <a href="#">Services</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
