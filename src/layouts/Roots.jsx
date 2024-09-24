import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/navbar";

const Roots = () => {
  return (
    <div className="font-roboto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
