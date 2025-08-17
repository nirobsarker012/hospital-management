import Hero from "../components/Hero";
import ServiceArea from "../components/ServiceArea";
import Welcome from "@/shared/components/Welcome";
import DepartmentComponent from "../components/DepartmentComponent";
import ChooseComponent from "../components/ChooseComponent";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceArea />
      <Welcome />
      <DepartmentComponent />
      <ChooseComponent />
    </>
  );
};

export default Home;
