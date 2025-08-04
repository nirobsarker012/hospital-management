import React from "react";
import { FaHotel, FaAmbulance, FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";
interface Services {
  id?: number;
  title?: string;
  sub_title?: string;
  btn?: string;
  path?: string;
  icon?: React.ReactNode;
}

const service_info: Services[] = [
  {
    id: 1,
    title: "Hospitality",
    sub_title:
      "Clinical excellence must be the priority for any health care service provider.",
    btn: "Apply For a Bed",
    path: "/hospitality",
    icon: <FaHotel className="text-blue-600 text-3xl" />,
  },
  {
    id: 2,
    title: "Emergency Care",
    sub_title:
      "Clinical excellence must be the priority for any health care service provider.",
    btn: "+10 23235343",
    path: "/contact",
    icon: <FaAmbulance className="text-red-500 text-3xl" />,
  },
  {
    id: 3,
    title: "Chamber Service",
    sub_title:
      "Clinical excellence must be the priority for any health care service provider",
    btn: "Make an Appointment",
    path: "/appointment",
    icon: <FaUserMd className="text-green-600 text-3xl" />,
  },
];

const ServiceArea: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch bg-[#013E50] ub">
      {service_info.map((service) => (
        <div
          key={service.id}
          className="flex flex-col gap-y-2 container py-5 lg:py-18 px-7 lg:px-10"
        >
          <div className="p-3 bg-blue-50 rounded-[16px] max-w-[80px] flex justify-center">
            {service.icon} {/* Render the icon */}
          </div>
          <h1 className="text-xl font-bold text-gray-200">{service.title}</h1>
          <p className="text-gray-400">{service.sub_title}</p>
          <Link
            to={`${service.path}`}
            className="mt-4 text-white px-4 py-2 rounded border border-gray-200 hover:bg-white hover:text-[#013E50] w-fit transition cursor-pointer"
          >
            {service.btn}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServiceArea;
