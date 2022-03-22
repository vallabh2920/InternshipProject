import React from "react";
import Faqs from "../components/Home/Faqs/Faqs";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import BaseLayout from "../layout/BaseLayout";

const index = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <div className="bg-curve bg-no-repeat bg-cover 	">
        <Faqs />
      </div>
    </BaseLayout>
  );
};

export default index;
