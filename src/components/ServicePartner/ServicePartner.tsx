import React from "react";
import img_1 from "../../assets/partnerImg/aroggo.webp";
import img_2 from "../../assets/partnerImg/amarlab.webp";
import img_3 from "../../assets/partnerImg/whuc.webp";
import img_4 from "../../assets/partnerImg/pure-health.webp";

type PartnersLogo = {
  id?: number;
  icon?: string;
};

const partnersLogo: PartnersLogo[] = [
  {
    id: 1,
    icon: img_1,
  },
  {
    id: 2,
    icon: img_2,
  },
  {
    id: 3,
    icon: img_3,
  },
  {
    id: 4,
    icon: img_4,
  },
];
const ServicePartner: React.FC = () => {
  return (
    <div className="bg-[#F3F4F6] border border-[#013e50] rounded-2xl py-[36px] mt-20 mb-52">
      <div className="flex items-center justify-center">
        <h1 className="text-[28px] lg:text-[48px] font-semibold text-[#013e50] mb-5 lg:mb-8 ub">
          Serive Partners
        </h1>
      </div>
      {/* partners logo */}
      <div className="max-w-[900px] mx-auto flex justify-center gap-4 items-center flex-wrap">
        {partnersLogo.map((p) => (
          <img key={p.id} src={p.icon} alt="" />
        ))}
      </div>
    </div>
  );
};

export default ServicePartner;
