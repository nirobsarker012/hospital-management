import React from "react";
import { CiMedicalCase } from "react-icons/ci";
import { LuSofa } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiNotepad } from "react-icons/pi";
import { IoTimerOutline } from "react-icons/io5";
import img_1 from "../assets/assets_frontend/blood-test-5906819_1280.jpg";

interface ChooseItems {
  id: number;
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

const chooseItems: ChooseItems[] = [
  {
    id: 1,
    title: "Qualified, empathetic therapists",
    subTitle: "In our treatment, we focus on relief from emotional distress",
    icon: <CiMedicalCase className="text-2xl" />,
  },
  {
    id: 2,
    title: "Comfortable, private environment",
    subTitle: "In our treatment, we focus on creating a safe space",
    icon: <LuSofa className="text-2xl" />,
  },
  {
    id: 3,
    title: "Depression Counseling",
    subTitle: "In our treatment, we focus on relief from depression",
    icon: <PiNotepad className="text-2xl" />,
  },
  {
    id: 4,
    title: "Personalized therapy plans",
    subTitle: "In our treatment, we focus on tailored solutions",
    icon: <IoTimerOutline className="text-2xl" />,
  },
];

const OurChoose = () => {
  return (
    <div className="py-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="bg-[#013E50] w-2.5 h-2.5 rounded-full"></span>
          <h4 className="text-xl font-semibold">Our Approach</h4>
        </div>
        <p className="text-gray-600 max-w-md md:text-right">
          Receive compassionate, personalized care in a safe, trauma-informed
          environment - built around your needs and values
        </p>
      </div>

      <hr className="border-gray-200 my-6" />

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Text Items */}
        <div className="flex-1 grid grid-cols-1 gap-4 min-h-[400px]">
          {chooseItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:bg-[#013E50] transition-all duration-300 
                         hover:text-white hover:shadow-md flex items-start gap-4 h-full"
            >
              <div className="mt-1">{item.icon}</div>
              <div>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-sm">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="flex-1 min-h-[400px] relative rounded-lg overflow-hidden shadow-sm">
          <img
            src={img_1}
            alt="Therapy session"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>
      <button className="inline-flex items-center gap-1.5 border border-[#013E50] py-2.5 px-6 rounded-[6px] cursor-pointer text-primary font-pop mt-7">
        Learn More <FaArrowRightLong />
      </button>
    </div>
  );
};

export default OurChoose;
