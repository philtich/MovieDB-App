import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderPage } from './HeaderPage';
import { FooterPage } from './FooterPage';

export const Layout = () => {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Layout;