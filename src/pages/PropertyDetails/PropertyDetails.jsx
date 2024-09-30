import { useLoaderData, useParams } from "react-router-dom";
import { MdSegment } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { IoLocationSharp } from "react-icons/io5";
import { GrShareOption } from "react-icons/gr";
import { FaIdBadge } from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = useLoaderData();
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

  if (!property) {
    return <p>Property not found</p>;
  }
  return (
    <div className="max-w-6xl mx-auto my-16 md:flex items-center">
      <img src={image} className="mx-auto rounded-lg " />
      <div className="card-body">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-gray-600">
            <IoLocationSharp className="text-xl" />
            <h3 className=" font-bold">{location}</h3>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaIdBadge />
            <p className="font-bold ">ID: {id}</p>
          </div>
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
      </div>
    </div>
  );
};

export default PropertyDetails;
