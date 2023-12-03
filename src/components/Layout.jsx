import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header /> {/* always render */}
      <Outlet /> {/* always change depending on route */}
      <Footer /> {/* always render */}
    </>
  );
};

export default Layout;
