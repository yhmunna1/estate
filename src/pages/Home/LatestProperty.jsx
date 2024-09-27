import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleProperty from "./SingleProperty";

const LatestProperty = () => {
  const properties = useLoaderData();
  return (
    <div className="py-28 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl text-center font-medium">
          Our Latest Properties
        </h1>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
          We are very proud of the service we provide. See what our guests have
          to say about us, our locations and services.
        </p>

        {/* Property */}
        <div className="grid grid-col-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <SingleProperty
              key={property.id}
              property={property}
            ></SingleProperty>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestProperty;
