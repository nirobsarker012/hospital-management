import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface HospitalDepartment {
  id: number;
  departName: string;
  image: string;
  description: string;
  doctorsCount: number;
  establishedYear: number;
  services: string[];
  contactEmail: string;
  isEmergencyAvailable: boolean;
}

const DepartmentComponent: React.FC = () => {
  const [departments, setDepartments] = useState<HospitalDepartment[]>([]);
  useEffect(() => {
    const fecthDepartments = async () => {
      try {
        const response = await fetch("/data/department.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: HospitalDepartment[] = await response.json();
        setDepartments(data);
      } catch (err) {
        console.log("Failed to reload the data", err);
      }
    };
    fecthDepartments();
  }, []);

  console.log(departments);
  return (
    <div className="bg-[#f5fbff] py-24 lg:py-32">
      <div className="flex flex-col justify-between items-center space-y-2.5">
        <h2 className="text-4xl font-medium">Our Departments</h2>
        <span className="block w-[60px] h-[3px] bg-[#013E50] mt-3.5"></span>
        <p className="text-center">
          Esteem spirit temper too say adieus who direct esteem. It esteems
          luckily or picture placing drawing.
        </p>
        {/* Department Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-3.5">
          {departments.map((department) => (
            <div
              key={department.id}
              className="max-w-[360px] bg-white shadow-sm rounded-2xl p-3"
            >
              <div className="overflow-hidden">
                {" "}
                <img
                  src={department.image}
                  alt=""
                  className="w-full rounded-xl h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex flex-col space-y-2.5 mt-3.5">
                <h3 className="font-semibold text-xl hover:text-blue-700 transition-all duration-150">
                  {department.departName}
                </h3>
                <p className="text-gray-500 text-[16px] ub">
                  {department.description}
                </p>
                <Link
                  className="text-blue-800 font-medium hover:underline"
                  to={"department/about"}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
