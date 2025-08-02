"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    const visibleCount = screenWidth < 640 ? 1 : screenWidth < 1024 ? 2 : 4;

    for (let i = 0; i < visibleCount + 0.5; i++) {
      visibleItems.push(properties[(startIndex + i) % properties.length]);
    }

    return visibleItems;
  };

  return (
    <section className="py-12 px-4 bg-white relative">
      <div className="max-w-[1190px] mx-auto overflow-hidden">
        <h3 className="text-orange-500 font-semibold mb-1 text-lg">
          Best Choices
        </h3>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
          Popular Residencies
        </h2>

        {/* Scrollable-style visible slider */}
        <div className="flex gap-6 overflow-x-visible transition-all">
          {getVisibleProperties().map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group bg-white rounded-lg shadow-sm hover:bg-[#EEEEFF] hover:p-2.5 transition-all duration-300 ease-in-out"
            >
              <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-sm text-gray-600">
                  <span className="text-orange-500 font-bold">{item.price}</span>
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6 md:mt-8">
          <button
            onClick={handlePrev}
            className="bg-[#0000FF] text-white w-10 h-10 hover:bg-blue-700 transition rounded"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="bg-[#0000FF] text-white w-10 h-10 hover:bg-blue-700 transition rounded"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
