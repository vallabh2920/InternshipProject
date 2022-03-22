import React from "react";
import Footer from "../globalComponents/Footer/Footer";
import Header from "../globalComponents/Header/Header";

const BaseLayout = ({ children }) => {
  return (
    <div className="bg-white h-screen overflow-y-scroll">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
