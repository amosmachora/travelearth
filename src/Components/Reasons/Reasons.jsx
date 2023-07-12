import React, { useContext } from "react";
import "./Reasons.css";
import Subtitle from "../Subtitle/Subtitle";
import { themeContext } from "../../App";

const Reasons = ({ reasonsObject }) => {
  const theme = useContext(themeContext);
  return (
    <div className="Reasons__container flex__container-v">
      <img src={reasonsObject.icon} alt="Icon" />
      <div className="Sub__container-mid Reasons__title">
        <Subtitle theme={theme} textGroup={reasonsObject.textGroup} />
      </div>
      <div className="Reasons__text">
        <p className="p__poppins">
          Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa
        </p>
      </div>
    </div>
  );
};

export default Reasons;
