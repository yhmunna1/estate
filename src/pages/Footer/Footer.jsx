import React from "react";
import logo from "../../assets/logo-06.png";

const Footer = () => {
  return (
    <div className=" bg-zinc-800 text-white">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <img src={logo} className="w-52" alt="Logo" />
          </div>
          <div className="footer">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
        </div>
      </div>
      <p className="text-center pt-16 pb-5 text-zinc-400">
        Copyright © 2024 - All right reserved - yhmunna
      </p>
    </div>
  );
};

export default Footer;
