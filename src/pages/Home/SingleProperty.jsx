import { MdSegment } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { GrShareOption } from "react-icons/gr";

const SingleProperty = ({ property }) => {
  const {
    image,
    estate_title,
    description,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
  } = property;
  return (
    <div className="card card-compact bg-base-100 w-96 border">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-1 text-gray-600">
          <IoLocationSharp className="text-xl" />
          <h3 className=" font-bold">{location}</h3>
        </div>
        <h2 className="card-title">{estate_title}</h2>
        <h4 className="font-bold text-red-500 text-base">{price}</h4>
        <p className="text-gray-500">{description}</p>
        <div className="flex gap-5">
          <div className="flex items-center gap-1 text-gray-500">
            <MdSegment />
            <p className=" font-bold">{segment_name}</p>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaHouse />
            <p className=" font-bold">{status}</p>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <PiMapPinSimpleAreaBold />
            <p className=" font-bold">{area}</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1 text-gray-500">
            <GrShareOption />
            <p className=" font-bold">
              {facilities[0]}, {facilities[1]}, {facilities[0]}
            </p>
          </div>
        </div>
        <div className="card-actions items-center">
          <button className="btn btn-warning btn-sm border-red-500 bg-red-500 text-white">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
