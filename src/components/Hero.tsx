import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowRightLong, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import img_1 from "../assets/Peaceful_img/meditation.jpg";
import img_2 from "../assets/Peaceful_img/couple.jpg";
import img_3 from "../assets/Peaceful_img/family.jpg";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AvatarDemo } from "./ui/AvatarDemo";

// Animation Variant
const slideUp = (delay = 0.2) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  },
});

const Hero: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="flex flex-col md:flex-row items-stretch gap-6 p-6 md:p-10 rounded-xl min-h-[500px] pop">
      {/* === Left Text Section === */}
      <motion.div
        variants={slideUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1 flex flex-col justify-center gap-4 p-4 md:p-6 bg-white rounded-xl shadow-sm"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-md leading-snug">
          Welcome to Mindora <span className="text-[#013E50]">Hospital</span>{" "}
          and Consulting
        </h1>

        <span className="inline-flex items-center bg-[#007C8D]/10 text-[#007C8D] font-medium px-4 py-1 rounded-2xl w-fit gap-1">
          Flexible Schedule <IoIosStarOutline />
        </span>

        <p className="text-gray-600 leading-relaxed max-w-md">
          — Compassionate care that's trauma-informed, resilience-driven, and
          focused on healing every step of the way.
        </p>

        <div className="bg-[#007C8D]/10 rounded-lg p-4 mt-2">
          <h3 className="font-semibold text-gray-800 mb-2">CHECK REVIEWS</h3>
          <div className="py-1.5">
            <AvatarDemo />
          </div>
          <p className="text-gray-600 mb-2">
            Join our active Therapy community as easy as a click away.
          </p>
          <Link
            to="/reviews"
            className="inline-flex items-center text-[#007C8D] font-medium hover:underline"
          >
            View Reviews <FaArrowRightLong className="ml-2" />
          </Link>
        </div>

        <Link
          to="/services"
          className="mt-4 bg-[#007C8D] text-white px-5 py-3 rounded-lg w-fit hover:bg-[#005c6b] transition"
        >
          Check Our Services
        </Link>
      </motion.div>

      {/* === Right Slider Section === */}
      <motion.div
        variants={slideUp(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-1 relative rounded-xl shadow-sm overflow-hidden"
      >
        {/* Navigation Buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute z-10 top-1/2 left-4 transform -translate-y-1/2 bg-white text-[#007C8D] rounded-full p-2 shadow-md hover:bg-[#007C8D]/10 transition"
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute z-10 top-1/2 right-4 transform -translate-y-1/2 bg-white text-[#007C8D] rounded-full p-2 shadow-md hover:bg-[#007C8D]/10 transition"
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-full"
        >
          {/* Slide 1 - Meditation */}
          <SwiperSlide>
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={img_1}
                alt="Meditation therapy session"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="max-w-md">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full mb-3">
                    ✨ Mindfulness Therapy
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Find Your{" "}
                    <span className="text-[#7FD1D1]">Inner Peace</span>
                  </h2>
                  <p className="text-white/90 mb-4">
                    Our meditation therapy helps you reduce stress and anxiety
                    through guided mindfulness practices.
                  </p>
                  <Link
                    to="/mindfulness"
                    className="inline-flex items-center bg-white text-[#007C8D] px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Learn More <FaArrowRightLong className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 - Couple Therapy */}
          <SwiperSlide>
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={img_2}
                alt="Couple therapy session"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="max-w-md">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full mb-3">
                    ✨ Relationship Counseling
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Strengthen Your{" "}
                    <span className="text-[#7FD1D1]">Connection</span>
                  </h2>
                  <p className="text-white/90 mb-4">
                    Our couple therapy sessions help build stronger
                    relationships through professional guidance.
                  </p>
                  <Link
                    to="/couple-therapy"
                    className="inline-flex items-center bg-white text-[#007C8D] px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Learn More <FaArrowRightLong className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 - Family Therapy */}
          <SwiperSlide>
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={img_3}
                alt="Family therapy session"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="max-w-md">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full mb-3">
                    ✨ Family Support
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Healing for the{" "}
                    <span className="text-[#7FD1D1]">Whole Family</span>
                  </h2>
                  <p className="text-white/90 mb-4">
                    Our family therapy programs improve communication and
                    strengthen relationships.
                  </p>
                  <Link
                    to="/family-therapy"
                    className="inline-flex items-center bg-white text-[#007C8D] px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
                  >
                    Learn More <FaArrowRightLong className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Therapist Info Overlay */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-sm z-10 max-w-[calc(100%-32px)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#007C8D] text-white flex items-center justify-center font-bold">
              W
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">Windy Sayan</p>
              <p className="text-gray-600 text-sm">Location: London, Nigeria</p>
              <p className="text-gray-600 text-sm">
                Head Therapy, PhD MSC Psychology
              </p>
            </div>
            <Link
              to="/book-session"
              className="bg-[#007C8D] text-white px-4 py-2 rounded-lg hover:bg-[#005c6b] transition whitespace-nowrap"
            >
              Book Session
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
