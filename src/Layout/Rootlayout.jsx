import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Shared/Navigation";

const Rootlayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Rootlayout;
