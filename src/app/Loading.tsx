import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const Loading: React.FC = () => {
  return (
    <main>
      <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default Loading;
