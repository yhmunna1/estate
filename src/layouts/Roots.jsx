import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/navbar";
import Footer from "../pages/Footer/Footer";

const Roots = () => {
  return (
    <div className="font-roboto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Roots;
