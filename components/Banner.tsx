"use client";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import CountUp from "react-countup";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#121212] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-24 overflow-hidden">
      {/* White Background Blur */}
      <div className="white-gradient"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left relative">
          <div className="orange-circle"></div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Discover <br />
            Most Suitable <br />
            Property
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Find a variety of properties that suit you very easily <br />
            Forget all difficulties in finding a residence for you
          </p>

          {/* Search Bar */}
          <div className="search-bar flex items-center max-w-md mx-auto lg:mx-0 mt-4">
            <span className="text-[#0000FF] text-xl pr-2">
              <IoLocationSharp />
            </span>
            <input
              type="text"
              placeholder="Enter location"
              className="flex-1 py-2 px-2 text-black outline-none bg-transparent text-sm sm:text-base"
            />
            <button className="bg-[#0000FF] text-white px-4 sm:px-6 py-2 font-semibold rounded text-sm sm:text-base">
              Search
            </button>
          </div>

          {/* Stats Section */}
          <div className="flexCenter relative right-8 gap-8 sm:gap-10 mt-8">
            <StatBox number={9000} label="Premium Product" />
            <StatBox number={2000} label="Happy Customer" />
            <StatBox number={28} label="Awards Winning" />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end relative z-10">
          <div className="image-container w-[90%] sm:w-[70%] md:w-[60%] lg:w-[30rem] h-[25rem] sm:h-[30rem] lg:h-[35rem]">
            <Image
              src="/assets/hero-image.png"
              alt="Property"
              width={600}
              height={700}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ number, label }: { number: number; label: string }) {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold flex">
        <CountUp end={number} duration={2} separator="," />
        <span className="text-[#FFA500] relative bottom ml-5"><FaPlus /></span>
      </h3>
      <p className="text-gray-300 text-sm sm:text-base">{label}</p>
    </div>
  );
}
