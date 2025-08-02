"use client";

import { useState } from "react";
import Image from "next/image";
import building from "../public/assets/imgi_13_city-1.png";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { MdAnalytics } from "react-icons/md";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  icon: JSX.Element;
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Best interest rates on the market",
    content:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    icon: <BsShieldFillCheck className="text-[#0000FF] text-xl" />,
  },
  {
    id: 2,
    title: "Prevent unstable prices",
    content:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    icon: <IoMdCloseCircle className="text-[#0000FF] text-xl" />,
  },
  {
    id: 3,
    title: "Best price on the market",
    content:
      "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    icon: <MdAnalytics className="text-[#0000FF] text-xl" />,
  },
];

export default function OurValue() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-[1200px] mx-auto py-12 px-4 sm:px-6 md:px-8 lg:px-10 bg-white" id="ourvalue">
      <div className="max-w-[1200px] mx-auto  flex flex-col md:flex-row gap-10 md:gap-12 items-center">
        {/* Left image */}
        <div className="relative w-full max-w-[480px] h-[300px] sm:h-[400px] md:h-[500px] md:w-1/2 rounded-t-full overflow-hidden border-[6px] sm:border-[8px] md:border-[10px] border-gray-100">
          <Image src={building} alt="Building" fill className="object-cover" />
        </div>

        {/* Right content */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
          <h3 className="text-[#FFA500] font-semibold text-xl sm:text-2xl">
            Our Value
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3E72] leading-tight">
            Value We Give to You
          </h2>
          <p className="text-[#8C8B8B] text-base sm:text-lg leading-relaxed">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {accordionItems.map((item, index) => (
              <div
                key={item.id}
                className="border rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-4 bg-white transition font-semibold text-left"
                >
                  <div className="flex items-center gap-3 text-primary">
                    {item.icon}
                    <span className="text-[#1F3E72] text-sm sm:text-base md:text-lg">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[#0000FF] text-base">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </button>

                {activeIndex === index && (
                  <div className="p-4 bg-white text-[#8C8B8B] text-sm sm:text-base leading-relaxed">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
