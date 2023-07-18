import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import FooterNav from "./FooterNav";
import MasterChef from "./MasterChef";

const PageLayout = ({ screenSize }) => {
  return (
    <>
      <HeaderNav />
      <Outlet />
      <FooterNav />
      <MasterChef screenSize={screenSize} />
    </>
  );
};

export default PageLayout;
