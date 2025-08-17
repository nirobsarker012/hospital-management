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

  if (isFetching) return <p>Loading .... </p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div className="w-full px-6 py-12 relative">
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
