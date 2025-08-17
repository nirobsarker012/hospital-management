import React from "react";
import DoctorsSlider from "./DoctorsSlider";

const AllDoctorSlider: React.FC = () => {
  return (
    <div className="bg-[#EFEDE9] py-6 lg:py-6 xl:py-10">
      <div className="container">
        <div className="flex justify-between lg:items-end flex-col lg:flex-row">
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <span className="bg-[#013e50] w-[10px] aspect-square rounded-full"></span>
              <p className="text-lg ub font-medium mb-1.5">
                Meet the Doctors Behind Mindora
              </p>
            </div>
            <h2 className="text-2xl font-bold text-[#013e50] max-w-[300px] mb-1.5">
              Experts in healing. Partners in your journey.
            </h2>
          </div>
          <p className="pop text-gray-500 max-w-[500px]">
            Our trauma-informed, cultrally aware treatments brings deep clinical
            expertise and genuine empathy to every session - offering care
            that's as personal as your story.
          </p>
        </div>
        <div className="border border-gray-500/20 mt-2.5"></div>
      </div>
      <DoctorsSlider />
    </div>
  );
};

export default AllDoctorSlider;
