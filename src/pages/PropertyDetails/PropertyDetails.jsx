import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <p>PropertyDetails {id}</p>
    </div>
  );
};

export default PropertyDetails;
