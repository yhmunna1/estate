import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";

const Contact = () => {
  return (
    <div className=" text-white bg-blue-800 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="flex items-center gap-3">
            <IoPhonePortraitOutline className="text-5xl" />
            <div className="text-lg font-bold">
              <h4>Phone:</h4>
              <h4>+00 0123-456789</h4>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GrMapLocation className="text-5xl" />
            <div className="text-lg font-bold">
              <h4>Address:</h4>
              <h4>Barishal, Bangladesh</h4>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <SlCalender className="text-5xl" />
            <div className="text-lg font-bold">
              <h4>Opening hours:</h4>
              <h4>Monday - Friday: 10:00 - 18:00</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
