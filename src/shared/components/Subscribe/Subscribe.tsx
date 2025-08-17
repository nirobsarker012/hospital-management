import React from "react";

const Subscribe: React.FC = () => {
  return (
    <div className="bg-[#F3F4F6] p-10 rounded-[10px] container">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h2 className="uppercase font-semibold text-[#013e50] text-[20px] lg:text-[38px] lg:max-w-[500px] pop">
          subscribe to our newsletter
        </h2>
        <div className="flex flex-col space-y-1.5">
          <p className="ub text-gray-500 text-[14px] lg:text-[16px]">
            Get notified about news, webinars, and offers
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 p-2 rounded-l bg-amber-50"
            />
            <button className="bg-[#013e50] text-white py-2 px-4 rounded-r cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
