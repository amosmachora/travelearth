import React from "react";
import "./Locations.css";

const Locations = ({ Place }) => {
  return (
    <div className="Locations__container flex__container-v">
      <div className="Location__image">
        <img src={Place.image} alt="Location" />
      </div>
      <div className="Location__text">
        <p className="p__poppins">{Place.text}</p>
      </div>
    </div>
  );
};

export default Locations;
