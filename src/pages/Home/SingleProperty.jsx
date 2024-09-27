import React from "react";

const SingleProperty = ({ property }) => {
  const { image, estate_title } = property;
  return (
    <div className="card card-compact bg-base-100 w-96 border">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
