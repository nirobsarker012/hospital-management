import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
      <div className="overflow-hidden">
        <Skeleton className="w-12 h-12 rounded-full " />
        <img
          src={""}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="p-4 bg-gray-50">
        <h3 className="text-lg font-semibold"></h3>
        <p className="text-sm text-gray-500"></p>
      </div>
    </div>
  );
};

export default SkeletonCard;
