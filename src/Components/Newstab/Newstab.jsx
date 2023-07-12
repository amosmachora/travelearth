import React, { useContext } from "react";
import "./Newstab.css";
import { themeContext } from "../../App";
import Subtitle from "../Subtitle/Subtitle";
import { Yellownews } from "../../Sections/Latestnews/Latestnews";
const textGroup = {
  text1: "Where does it come from?",
  text2: "",
};

const Newstab = ({ news }) => {
  const theme = useContext(themeContext);
  return (
    <div className="Newstab__container flex__container">
      <div className="Newstab__right ">
        <img src={news.image} alt="Image" />
        <div className="Newstab__right-yellow">
          <Yellownews text={news.text} />
        </div>
      </div>
      <div className="Newstab__left flex__container-v">
        <div className="Sub__container-mid">
          <Subtitle theme={theme} textGroup={textGroup} />
        </div>
        <div className="Newstab__left-text">
          <p className="p__poppins">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newstab;
