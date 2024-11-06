import React from "react";
import HeaderSection3 from "../header/HeaderSection3";
import FooterSection from "../footer/FooterSection";
import RightSideBar from "../sidebar/RightSideBar";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderSection3 />
      {children}
      <RightSideBar />
      <FooterSection logo="assets/images/logo-1.png" />
    </>
  );
};

export default Layout;
