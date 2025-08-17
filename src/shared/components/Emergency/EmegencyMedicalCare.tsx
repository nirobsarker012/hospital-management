import React from "react";
import videoBg from "../../../assets/video/doc-prescription.mp4";

const EmegencyMedicalCare: React.FC = () => {
  return (
    <section className="my-20">
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#013e50]/70"></div>
        <video
          className="w-full h-full lg:h-[400px] object-cover"
          src={videoBg}
          autoPlay
          loop
          muted
        />
        {/* Content */}
        <div className="flex justify-center items-center flex-col text-center md:space-y-2.5 absolute top-0 right-0 w-full h-full text-white">
          <h1 className="ub font-bold text-[23px] lg:text-[48px]">
            Do you need Emergency Medical Care?
          </h1>
          <h3 className="ub text-[18px] lg:text-[38px] font-semibold">
            Call @ 1243
          </h3>
          <span className="text-gray-300 text-[14px] lg:text-[24px] mb-1 lg:mb-2.5">
            or 9673467346734. You can also reach us by the email:
            info@mindora.com
          </span>
          <div className="flex items-center gap-x-2">
            <button className="border border-white bg-white/70 hover:bg-transparent hover:text-white transition-all duration-300 text-[#013e50] py-2.5 px-1.5 lg:px-3 rounded-[6px] text-[14px] lg:text-[18px]  cursor-pointer font-semibold pop">
              Call Now
            </button>
            <button className="border border-white hover:bg-white/70 hover:text-[#013e50] transition-all duration-200 py-2.5 px-1.5 lg:px-3 rounded-[6px] text-[14px] lg:text-[18px] cursor-pointer font-semibold pop">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmegencyMedicalCare;
