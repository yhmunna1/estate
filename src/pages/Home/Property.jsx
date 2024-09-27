import React from "react";
import property1 from "../../assets/property (1).jpg";
import property2 from "../../assets/property (2).jpg";
import property3 from "../../assets/property (3).jpg";
import property4 from "../../assets/property (4).jpg";

const Property = () => {
  return (
    <div className="max-w-6xl mx-auto my-28">
      <h1 className="text-4xl text-center font-medium">
        Looking for a property?
      </h1>
      <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
        We are very proud of the service we provide. See what our guests have to
        say about us, our locations and services.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Property */}
        <div className="relative group">
          <img
            src={property1}
            alt="Condos"
            className="w-full h-72 object-cover rounded-lg"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 text-white w-full p-3">
            <h3 className="text-xl font-semibold">Condos</h3>
            <p className="text-sm">1 Listing</p>
          </div>
        </div>

        {/* Second Property */}
        <div className="relative group">
          <img
            src={property2}
            alt="Villas"
            className="w-full h-72 object-cover rounded-lg"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 text-white w-full p-3">
            <h3 className="text-xl font-semibold">Villas</h3>
            <p className="text-sm">3 Listings</p>
          </div>
        </div>

        {/* Third Property */}
        <div className="relative group">
          <img
            src={property3}
            alt="Houses"
            className="w-full h-72 object-cover rounded-lg"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 text-white w-full p-3">
            <h3 className="text-xl font-semibold">Houses</h3>
            <p className="text-sm">3 Listings</p>
          </div>
        </div>

        {/* Fourth Property */}
        <div className="relative group">
          <img
            src={property4}
            alt="Apartments"
            className="w-full h-72 object-cover rounded-lg"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <div className="absolute bottom-0 left-0 text-white w-full p-3">
            <h3 className="text-xl font-semibold">Apartments</h3>
            <p className="text-sm">3 Listings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
