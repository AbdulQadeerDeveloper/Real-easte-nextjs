"use client";
import Image from "next/image";

const brandLogos = [
  { src: "/assets/prologis.png", alt: "Prologis" },
  { src: "/assets/tower.png", alt: "American Tower" },
  { src: "/assets/equinix.png", alt: "Equinix" },
  { src: "/assets/realty.png", alt: "Digital Realty" },
];

export default function TopBrands() {
  return (
    <section className="py-14 px-4 max-w-[1200px] mx-auto ">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center items-center">
        {brandLogos.map((brand, index) => (
          <Image
            key={index}
            src={brand.src}
            alt={brand.alt}
            width={200}
            height={48}
            className="object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
