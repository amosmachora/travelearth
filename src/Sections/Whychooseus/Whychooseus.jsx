import React, { useContext } from "react";
import "./Whychooseus.css";
import images from "../../assets/assets";
import Reasons from "../../Components/Reasons/Reasons";
import Subtitle from "../../Components/Subtitle/Subtitle";
import { themeContext } from "../../App";

const textGroup = {
  text1: "Why",
  text2: "Choose Us",
};

const reasonsObject = [
  {
    icon: images.Staricon,
    textGroup: {
      text1: "Handpicked Hotels",
      text2: "",
    },
  },
  {
    icon: images.Worldicon,
    textGroup: {
      text1: "World Class Service",
      text2: "",
    },
  },
  {
    icon: images.Like,
    textGroup: {
      text1: "Best Price Guarantee",
      text2: "",
    },
  },
];

const Whychooseus = () => {
  const theme = useContext(themeContext);
  return (
    <div className="Whychooseus__container flex__container-v">
      <div className="Sub__container-Head">
        <Subtitle theme={theme} textGroup={textGroup} />
      </div>
      <p className="p__poppins">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div className="Whychooseus__reasons flex__container">
        <Reasons reasonsObject={reasonsObject[0]} />
        <Reasons reasonsObject={reasonsObject[1]} />
        <Reasons reasonsObject={reasonsObject[2]} />
      </div>
    </div>
  );
};

export default Whychooseus;
