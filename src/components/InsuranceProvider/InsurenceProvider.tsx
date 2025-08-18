import React from "react";
// import img_1 from "../../assets/partnerImg/axa.jpg";
import img_2 from "../../assets/partnerImg/baximco-ph.jpg";
import img_3 from "../../assets/partnerImg/bd-bank.png";
import img_4 from "../../assets/partnerImg/bd-police.jpg";
import img_5 from "../../assets/partnerImg/bgb.jpg";
import img_6 from "../../assets/partnerImg/biman-air.jpg";
import img_7 from "../../assets/partnerImg/brac-bank.jpg";
import img_8 from "../../assets/partnerImg/british-amirican.jpg";
import img_9 from "../../assets/partnerImg/estd.jpg";
import img_10 from "../../assets/partnerImg/gp.jpg";
import img_11 from "../../assets/partnerImg/neslet.jpg";

type provider = {
  id: number;
  icon: string;
};
const serviceProvider: provider[] = [
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
  {
    id: 5,
    icon: img_5,
  },
  {
    id: 6,
    icon: img_6,
  },
  {
    id: 7,
    icon: img_7,
  },
  {
    id: 8,
    icon: img_8,
  },
  {
    id: 9,
    icon: img_9,
  },
  {
    id: 10,
    icon: img_10,
  },
  {
    id: 11,
    icon: img_11,
  },
];
const InsurenceProvider: React.FC = () => {
  return (
    <section>
      <div className="flex items-center gap-x-5 overflow-hidden">
        {serviceProvider.map((p) => (
          <img
            key={p.id}
            src={p.icon}
            alt=""
            className="w-[80px] lg:w-[120px] mx-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default InsurenceProvider;
