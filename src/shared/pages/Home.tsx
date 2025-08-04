import React from "react";
import Hero from "../components/Hero";
import ServiceArea from "../components/ServiceArea";
import Welcome from "@/components/Welcome";
import DepartmentComponent from "../components/DepartmentComponent";

const Home = () => {
  return (
    <>
      <Hero />
      <ServiceArea />
      <Welcome />
      <DepartmentComponent />
    </>
  );
};

export default Home;
