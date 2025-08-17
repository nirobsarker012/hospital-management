import Hero from "../../components/Hero";
import ServiceArea from "../../components/ServiceArea";
import Welcome from "@/shared/components/Welcome";
import DepartmentComponent from "../../components/DepartmentComponent";
import ChooseComponent from "../../components/OurChoose";
import AllDoctorSlider from "@/shared/components/Doctors/AllDoctorSlider";
import EmegencyMedicalCare from "@/shared/components/Emergency/EmegencyMedicalCare";
import InsuranceMarquee from "@/shared/components/ui/InsuranceMarquee";
import ServicePartner from "@/shared/components/ServicePartner/ServicePartner";
// import InsurenceProvider from "@/shared/components/InsuranceProvider/InsurenceProvider";

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
      <InsuranceMarquee />
      <ServicePartner />
    </>
  );
};

export default Home;
