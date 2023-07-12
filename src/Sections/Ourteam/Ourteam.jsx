import React from "react";
import "./Ourteam.css";
import Subtitle from "../../Components/Subtitle/Subtitle";
import images from "../../assets/assets";

const textGroup = {
  text1: "Our",
  text2: "Team",
};

const textGroup2 = {
  text1: "Team is the secret",
  text2: "to our success",
};

const icons = {
  icon1: images.icon1,
  icon2: images.icon2,
};

const Teamsection = ({ icon }) => {
  return (
    <div className="Teamsection__container flex__container">
      <div className="Teamsection__icon">
        <img src={icon} alt="icon" />
      </div>
      <p className="p__poppins">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
    </div>
  );
};

const Ourteam = ({ theme }) => {
  return (
    <div className="Ourteam__container flex__container-v">
      <div className="Ourteam__header">
        <div className="Sub__container-Head">
          <Subtitle theme={theme} textGroup={textGroup} />
        </div>
        <p className="p__poppins">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          tempora!
        </p>
      </div>
      <div className="Ourteam__body flex__container">
        <div className="Ourteam__body-right flex__container">
          <div className="Ourteam__circles-brown">
            <svg
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="70" cy="70" r="70" fill="#EE5060" />
            </svg>
          </div>
          <div className="Ourteam__circles-yellow">
            <svg
              width="264"
              height="264"
              viewBox="0 0 264 264"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M264 132C264 204.902 204.902 264 132 264C59.0984 264 0 204.902 0 132C0 59.0984 59.0984 0 132 0C204.902 0 264 59.0984 264 132Z"
                fill="#F0C53E"
              />
            </svg>
          </div>
          <div className="Ourteam__circles-grey">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#D8C7B4" />
            </svg>
          </div>
          <div className="Ourteam__circles-brown2">
            <svg
              width="30"
              height="30"
              viewBox="0 0 140 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="70" cy="70" r="70" fill="#EE5060" />
            </svg>
          </div>
          <div className="Ourteam__body-imgcontainer">
            <img
              src={images.people}
              alt="People"
              className="Ourteam__body-img"
            />
          </div>
        </div>
        <div className="Ourteam__body-left">
          <div className="flex__container Ourteam__body-left-2">
            <p className="p__poppins">Our</p>
            <div className="Sub__container-mid">
              <Subtitle theme={theme} textGroup={textGroup2} />
            </div>
          </div>
          <Teamsection icon={icons.icon1} />
          <Teamsection icon={icons.icon2} />
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
