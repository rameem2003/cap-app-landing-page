import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Shared/Navigation";
import Footer from "../components/Shared/Footer";

const Rootlayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
