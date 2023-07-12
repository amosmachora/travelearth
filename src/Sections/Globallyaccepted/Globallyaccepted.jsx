import React, { useContext } from "react";
import { themeContext } from "../../App";
import Subtitle from "../../Components/Subtitle/Subtitle";
import images from "../../assets/assets";
import Trips from "../../Components/Trips/Trips";
import "./Globallyaccepted.css";

const textGroup = {
  text1: "Globally",
  text2: "Accepted",
};

const category = [
  {
    type: "For Domestic",
    bgImage: images.Bag,
  },
  {
    type: "For International",
    bgImage: images.World,
  },
];

const Globallyaccepted = () => {
  const theme = useContext(themeContext);
  return (
    <div className="Globallyaccepted__container flex__container-v">
      <div className="Sub__container-Head">
        <Subtitle theme={theme} textGroup={textGroup} />
      </div>
      <div className="Globallyaccepted__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam iure
        illum aliquid soluta totam optio, nam dolorem, autem itaque eos fugit,
        porro esse voluptatem sapiente laudantium facere.
      </div>
      <div className="Globallyaccepted__categories flex__container">
        <Trips theme={theme} category={category[0]} />
        <Trips theme={theme} category={category[1]} />
      </div>
    </div>
  );
};

export default Globallyaccepted;
