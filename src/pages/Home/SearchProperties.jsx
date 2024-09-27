import React from "react";

const SearchProperties = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-lg p-5 rounded-lg mt-10">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Area
                </option>
                <option>Area 1</option>
                <option>Area 2</option>
                <option>Area 3</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Category
                </option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Type
                </option>
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Rooms
                </option>
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Beds/Baths
                </option>
                <option>1 Bed/Bath</option>
                <option>2 Beds/Baths</option>
                <option>3 Beds/Baths</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Property Status
                </option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select Price
                </option>
                <option>$1000-$2000</option>
                <option>$2000-$3000</option>
                <option>$3000-$4000</option>
              </select>
            </div>
            <div>
              <button className="btn bg-red-600 text-white w-full">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProperties;
