"use client";
import Image from "next/image";
import { useState } from "react";
import image1 from "../public/assets/r1.png";
import image2 from "../public/assets/r2.png";
import image3 from "../public/assets/r3.png";
import image4 from "../public/assets/r1.png"; // duplicate for demo

interface Property {
  id: number;
  image: any;
  price: string;
  title: string;
  location: string;
}

const properties: Property[] = [
  {
    id: 1,
    image: image1,
    price: "$66,353",
    title: "Asatti Garden City",
    location: "Pahlawan Street XVII No.215, Cinangka, Depok, Jawa Barat",
  },
  {
    id: 2,
    image: image2,
    price: "$35,853",
    title: "Citralan Puri Serang",
    location: "Ciracas, Serang, Banten",
  },
  {
    id: 3,
    image: image3,
    price: "$47,043",
    title: "Aliva Priva Jardin",
    location: "Cakung, Jakarta Timur, DKI Jakarta",
  },
  {
    id: 4,
    image: image4,
    price: "$66,353",
    title: "Asatti Garden City",
    location: "Depok, Jawa Barat",
  },
];

export default function ResidencySlider() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % properties.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? properties.length - 1 : prev - 1
    );
  };

  const getVisibleProperties = () => {
    const visibleItems = [];

    // Show 1 card on mobile, 2 on tablets, 4 on desktop
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
    const visibleCount = screenWidth < 640 ? 1 : screenWidth < 1024 ? 2 : 4;

    for (let i = 0; i < visibleCount; i++) {
      visibleItems.push(properties[(startIndex + i) % properties.length]);
    }

    return visibleItems;
  };

  return (
    <section className="py-12 px-4 bg-white relative">
      <div className="max-w-[1190px] mx-auto">
        <h3 className="text-orange-500 font-semibold mb-1 text-lg">
          Best Choices
        </h3>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          Popular Residencies
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {getVisibleProperties().map((item) => (
            <div key={item.id}>
              <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-600">
                <span className="text-orange-500 font-bold">{item.price}</span>
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500">{item.location}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6 md:mt-8">
          <button
            onClick={handlePrev}
            className="bg-[#0000FF] text-white w-10 h-10 hover:bg-blue-700 transition"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="bg-[#0000FF] text-white w-10 h-10 hover:bg-blue-700 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
