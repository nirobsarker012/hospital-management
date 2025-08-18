import React from "react";
import FastMarquee from "react-fast-marquee";
import InsurenceProvider from "../InsuranceProvider/InsurenceProvider";

const InsuranceMarquee: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-[28px] lg:text-[48px] font-semibold text-[#013e50] mb-5 lg:mb-8 ub">
          Trusted Insurance Provider
        </h1>
      </div>
      <div className="container">
        <FastMarquee
          pauseOnHover
          speed={30}
          direction="left"
          delay={0}
          loop={0}
          gradient={true}
          gradientColor={[248, 251, 253] as unknown as string}
          gradientWidth={"100px"}
        >
          <InsurenceProvider />
        </FastMarquee>
      </div>
    </>
  );
};

export default InsuranceMarquee;
