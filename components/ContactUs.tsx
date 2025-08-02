"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp, IoChatbox } from "react-icons/io5";
import Image from "next/image";
import building from "../public/assets/imgi_13_city-1.png"; 

const contactData = [
  {
    icon: <FaPhoneAlt className="text-[#4161DF] text-2xl" />,
    title: "Call",
    number: "021 123 145 14",
    buttonText: "Call now",
  },
  {
    icon: <IoChatbubbleEllipsesSharp className="text-[#4161DF] text-2xl" />,
    title: "Chat",
    number: "021 123 145 14",
    buttonText: "Chat now",
  },
  {
    icon: <IoChatbox className="text-[#4161DF] text-2xl" />,
    title: "Video Call",
    number: "021 123 145 14",
    buttonText: "Video Call now",
  },
  {
    icon: <IoChatbubbleEllipsesSharp className="text-[#4161DF] text-2xl" />,
    title: "Message",
    number: "021 123 145 14",
    buttonText: "Message now",
  },
];

export default function ContactUs() {
  return (
    <section className="py-16 sm:px-6 lg:px-12 xl:px-20" id="contactUs">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-orange-500 font-bold text-lg sm:text-xl mb-2 sm:mb-3">
            Our Contact Us
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F3E72] mb-4">
            Easy to contact us
          </h1>
          <p className="text-[#8C8B8B] text-base sm:text-lg mb-6">
            We always ready to help by providing the best services for you. We
            believe a good place to live can make your life better.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactData.map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 bg-white border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#eeeeff] p-3 rounded-md">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#1F3E72]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.number}</p>
                  </div>
                </div>
                <button className="mt-2 w-full text-[#4161DF] font-bold bg-[#eeeeff] py-2 rounded-md hover:bg-[#4161DF] hover:text-white transition">
                  {item.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[550px] mx-auto rounded-t-full overflow-hidden border-[10px] border-gray-100">
          <Image
            src={building}
            alt="Building"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
          />
        </div>
      </div>
    </section>
  );
}
