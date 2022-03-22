import React from "react";
import Content from "../components/tandc/Content/Content";
import HeroSection from "../components/tandc/heroSection/HeroSection";
import BaseLayout from "../layout/BaseLayout";

const tandc = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <div className="bg-curve2 bg-cover  bg-no-repeat	pb-16 	">
        <Content />
      </div>
    </BaseLayout>
  );
};

export default tandc;
