import React, { useContext } from "react";
import "./Customersay.css";
import { themeContext } from "../../App";
import Subtitle from "../../Components/Subtitle/Subtitle";
import images from "../../assets/assets";

const textGroup = {
  text1: "What Customers Say?",
  text2: "",
};

const Customersay = () => {
  const theme = useContext(themeContext);
  return (
    <div className="Customersay__container flex__container">
      <div className="Customersay__right">
        <div className="Customersay__right-testimonial flex__container">
          <div />
          <p className="p__nunito">Testimonial</p>
        </div>
        <div className="Sub__container-Head">
          <Subtitle theme={theme} textGroup={textGroup} />
        </div>
        <div className="Customersay__right-ptags">
          <p className="p__poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="p__poppins">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="p__poppins">Lorem Ipsum is simply dummy text of the</p>
        </div>
        <div className="Customersay__pinkbtn flex__container">
          <p className="p__poppins">Write your thoughts</p>
          <div>
            <img src={images.PinkArrow} alt="Arrow" />
          </div>
        </div>
      </div>
      <div className="Customersay__left ">
        <div className="Customersay__left-img">
          <img src={images.SmilingWoman} alt="Woman" />
          <div className="Customersay__left__img-change">
            <img src={images.Switch} alt="Icon" />
          </div>
        </div>
        <div className="Customersay__left-Bar flex__container">
          <div />
          <div className="greyLine" />
          <div className="Customersay__left-text">
            <p className="p__nunito">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <div className="Customersay__left-review flex__container">
              <p className="p__nunito">Kyiloria Danu</p>
              <div className="Customersay__left-stars flex__container-v">
                <img src={images.Stars} alt="Stars" />
                <p className="p__nunito">12 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customersay;
