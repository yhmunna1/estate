import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProperty from "./SingleProperty";

const LatestProperty = () => {
  const properties = useLoaderData();
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(properties.length);
  };

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
        <div className="mx-auto">
          <div className="grid grid-col-1 md:grid-cols-3 gap-6">
            {properties.slice(0, visibleCount).map((property) => (
              <SingleProperty
                key={property.id}
                property={property}
              ></SingleProperty>
            ))}
          </div>

          {/* Show Load More button only if there are more properties to show */}
          {visibleCount < properties.length && (
            <div className="text-center pt-5">
              <button
                onClick={handleLoadMore}
                className="btn btn-warning border-red-500 bg-red-500 text-white"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestProperty;
