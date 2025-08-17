import img_1 from "../../assets/doctor_patient_img/doctor-650534_1280.jpg";
import img_2 from "../../assets/doctor_patient_img/doctor-5710153_1280.jpg";
import { FaRegCircleCheck } from "react-icons/fa6";

const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-12">
      <div className="relative max-w-[350px]">
        <img src={img_1} alt="" className="w-full rounded-[5px]" />
        <img
          src={img_2}
          alt=""
          className="absolute max-w-[350px] -bottom-30 left-38 rounded-[5px] hidden lg:block"
        />
      </div>
      {/* Text */}
      <div className="mt-20 md:mt-0 max-w-[360px] lg:max-w-[500px]">
        <h3 className="text-xl lg:text-2xl mb-2">Welcome to Mindora</h3>
        <h2 className="text-3xl font-semibold">
          Best Care For Your Good Health
        </h2>
        <p className="text-[14px] text-[#383838] ub my-1.5">
          Esteem spirit temper too say adieus who direct esteem. It esteems
          luckily or picture placing drawing. Apartments frequently or
          motionless on reasonable projecting expression.
        </p>
        <span className="inline-flex items-center gap-x-2.5 pop">
          <FaRegCircleCheck /> Apartments frequently or motionless.
        </span>
        <span className="inline-flex items-center gap-x-2.5 pop">
          <FaRegCircleCheck /> Duis aute irure dolor in reprehenderit in
          voluptate.
        </span>
        <span className="inline-flex items-center gap-x-2.5 pop">
          <FaRegCircleCheck /> Voluptatem quia voluptas sit aspernatur.
        </span>
      </div>
    </div>
  );
};

export default Welcome;
