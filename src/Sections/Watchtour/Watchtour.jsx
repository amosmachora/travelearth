import React, { useRef, useState } from "react";
import "./Watchtour.css";
import images from "../../assets/assets";
import Subtitle from "../../Components/Subtitle/Subtitle";
import { MdOutlinePlayCircle, MdPause } from "react-icons/md";

const textGroup = {
  text1: "Watch,",
  text2: "our lattest tour",
};
const Watchtour = ({ theme }) => {
  const [playVideo, setPlayVideo] = useState(false);

  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="Watchtour__container flex__container">
      <div className="Watchtour__left flex__container-v">
        <div className="Sub__container-Head">
          <Subtitle theme={theme} textGroup={textGroup} />
        </div>
        <div className="circle-topright">
          <svg
            width="73"
            height="73"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="36.5" cy="36.5" r="36.5" fill="#F0C53E" />
          </svg>
        </div>
        <div className="circle-rightmid">
          <svg
            width="30"
            height="30"
            viewBox="0 0 73 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="36.5" cy="36.5" r="36.5" fill="#F0C53E" />
          </svg>
        </div>
        <div className="Watchtour__left-text">
          <p className="p__poppins">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, distinctio! Voluptas ducimus tenetur a. Possimus
            tempora quia delectus vero minus, esse provident iure libero ipsa
            odio numquam distinctio est nesciunt dolores commodi atque enim.
            Odio accusamus quas explicabo debitis mollitia.
          </p>
        </div>
        <div className="Watchtour__left-link p__poppins">
          <a href="#">Learn more</a>
        </div>
      </div>
      <div className="Watchtour__right">
        <div className="Square__topright">
          <svg
            width="138"
            height="138"
            viewBox="0 0 138 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="138" height="138" rx="20" fill="#EE5060" />
          </svg>
        </div>
        <div className="Square__bottomleft">
          <svg
            width="231"
            height="231"
            viewBox="0 0 231 231"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="231" height="231" rx="20" fill="#F0C53E" />
          </svg>
        </div>
        <div className="Watchtour__right-video">
          <video
            src={images.flying}
            loop
            type="video/mp4"
            controls={false}
            ref={vidRef}
          />
          <div className="Center__playbutton" onClick={handleVideo}>
            {playVideo ? (
              <MdPause fontSize={60} color="#f0c53e" />
            ) : (
              <MdOutlinePlayCircle fontSize={60} color="#f0c53e" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchtour;
