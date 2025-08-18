/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef } from "react";
import axios from "axios";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const getAllDoctorsData = async () => {
  const response = await axios.get(`http://localhost:3000/all-doctors`);
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
  return response.data;
};

const DoctorsSlider: React.FC = () => {
  const { data, isFetching, error } = useQuery({
    queryFn: getAllDoctorsData,
    queryKey: ["doctors"],
  });

  // Refs for custom buttons
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (isFetching)
    return (
      <div className="flex items-center justify-center h-12">
        <div className="w-12 text-[#013e50]">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
              opacity=".25"
            ></path>
            <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                dur="0.75s"
                values="0 12 12;360 12 12"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
        </div>
      </div>
    );
  if (error) return <p className="text-red-500">Something went wrong</p>;

  return (
    <div className="w-full py-12 relative container">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Expert Doctors</h2>

        {/* Custom Navigation Buttons */}
        <div className="flex gap-3">
          <button
            ref={prevRef}
            className="text-black p-3 border border-[#838383] rounded-[6px] hover:bg-[#013e50] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="text-black p-3 border border-[#838383] rounded-[6px] hover:bg-[#013e50] hover:text-white transition-all duration-300 cursor-pointer"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        onInit={(swiper) => {
          // Attach custom buttons to Swiper
          if (typeof swiper.params.navigation !== "boolean") {
            const navigation = swiper.params.navigation as any;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-12"
      >
        {data.map((doc: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <div className="overflow-hidden">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <h3 className="text-lg font-semibold">{doc.name}</h3>
                <p className="text-sm text-gray-500">{doc.speciality}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DoctorsSlider;
