import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import FooterNav from "./FooterNav";
import MasterChef from "./MasterChef";
import OrderModalButton from "./OrderModalButton";

const PageLayout = ({ screenSize }) => {
  return (
    <>
      <HeaderNav />
      <Outlet />
      <FooterNav />
      <MasterChef screenSize={screenSize} />
      <OrderModalButton />
    </>
  );
};

export default PageLayout;
