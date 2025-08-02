"use client";

export default function CallToAction() {
  return (
    <section className="max-w-[1120px] mx-auto  bg-[#4161DF] rounded-xl text-white py-12 px-6 md:px-20 mt-10" id="getStarted">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Get started with Homyz</h2>
        <p className="text-sm md:text-base mb-6">
          Subscribe and find super attractive price quotes from us. <br />
          Find your residence soon
        </p>
        <button className="bg-transparent border border-white px-6 py-2 rounded-md hover:bg-white hover:text-[#5a27e4] transition">
          Get Started
        </button>
      </div>
    </section>
  );
}
