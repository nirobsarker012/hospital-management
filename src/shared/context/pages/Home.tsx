import Hero from "../../components/Hero";
import ServiceArea from "../../components/ServiceArea";
import Welcome from "@/shared/components/Welcome";
import DepartmentComponent from "../../components/DepartmentComponent";
import ChooseComponent from "../../components/OurChoose";
import AllDoctorSlider from "@/shared/components/Doctors/AllDoctorSlider";
import EmegencyMedicalCare from "@/shared/components/Emergency/EmegencyMedicalCare";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceArea />
      <Welcome />
      <DepartmentComponent />
      <ChooseComponent />
      <AllDoctorSlider />
      <EmegencyMedicalCare />
    </>
  );
};

export default Home;
