import React, { useContext } from "react";
import "./Latestnews.css";
import Subtitle from "../../Components/Subtitle/Subtitle";
import { themeContext } from "../../App";
import images from "../../assets/assets";
import Newstab from "../../Components/Newstab/Newstab";

const textGroup = {
  text1: "Latest News and Resources",
  text2: "",
};
const textGroup2 = {
  text1: "Where does it come from?",
  text2: "",
};

const newsObject = [
  {
    image: images.Phone,
    text: "PRESS RELEASE",
  },
  {
    image: images.LadyCamera,
    text: "NEWS",
  },
  {
    image: images.UmbrellaTree,
    text: "NEWS",
  },
];

const Latestnews = () => {
  const theme = useContext(themeContext);
  return (
    <div className="Latestnews__container flex__container-v">
      <div className="Latestnews__header flex__container-v">
        <div className="Sub__container-Head">
          <Subtitle theme={theme} textGroup={textGroup} />
        </div>
        <p className="p__nunito">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="Latestnews__body flex__container">
        <div className="Latestnews__right">
          <img src={images.Burj} alt="Burj" />
          <div className="Latestnews__right-yellow">
            <Yellownews text={"NEWS"} />
          </div>
          <div className="Sub__container-mid">
            <Subtitle theme={theme} textGroup={textGroup2} />
          </div>
          <div className="Latestnews__right-subtitle">
            <p className="p__poppins">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
          </div>
          <a href="#">
            <p className="p__poppins">Read More</p>
          </a>
        </div>
        <div className="Latestnews__left">
          <Newstab news={newsObject[0]} />
          <Newstab news={newsObject[1]} />
          <Newstab news={newsObject[2]} />
        </div>
      </div>
    </div>
  );
};

export default Latestnews;

export const Yellownews = ({ text }) => {
  const theme = useContext(themeContext);
  return (
    <div
      className="Yellonews__container"
      style={{ backgroundColor: theme.background }}
    >
      <p className="p__poppins" style={{ color: theme.primarytextcolour }}>
        {text}
      </p>
    </div>
  );
};
