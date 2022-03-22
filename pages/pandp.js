import React from "react";
import Content from "../components/privacyPolicy/Content/Content";
import HeroSection from "../components/privacyPolicy/heroSection/HeroSection";
import BaseLayout from "../layout/BaseLayout";

const pandp = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <div className="bg-curve2 bg-cover  bg-no-repeat	pb-16 	">
        <Content />
      </div>
    </BaseLayout>
  );
};

export default pandp;
