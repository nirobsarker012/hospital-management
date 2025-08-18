// import InsurenceProvider from "@/shared/components/InsuranceProvider/InsurenceProvider";

import DepartmentComponent from "@/components/DepartmentComponent";
import AllDoctorSlider from "@/components/Doctors/AllDoctorSlider";
import EmegencyMedicalCare from "@/components/Emergency/EmegencyMedicalCare";
import Hero from "@/components/Hero";
import OurChoose from "@/components/OurChoose";
import ServiceArea from "@/components/ServiceArea";
import ServicePartner from "@/components/ServicePartner/ServicePartner";
import InsuranceMarquee from "@/components/ui/InsuranceMarquee";
import Welcome from "@/components/Welcome";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceArea />
      <Welcome />
      <DepartmentComponent />
      <OurChoose />
      <AllDoctorSlider />
      <EmegencyMedicalCare />
      <InsuranceMarquee />
      <ServicePartner />
    </>
  );
};

export default Home;
