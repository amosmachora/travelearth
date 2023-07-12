import React, { useContext } from "react";
import "./Footer.css";
import Logo from "../../Components/Logo/Logo";
import { themeContext } from "../../App";

const Footer = () => {
  const theme = useContext(themeContext);
  const location = "footer";
  return (
    <div
      className="Footer flex__container-v"
      style={{ backgroundColor: theme.secondarytextcolour }}
    >
      <div className="Footer__first flex__container">
        <Logo theme={theme} />
        <p className="p__poppins">Domestic International Tours</p>
      </div>
      <div className="Footer__second">
        <p className="p__poppins" style={{ color: theme.background }}>
          Subscribe to get our Newsletter
        </p>
      </div>
      <div className="Footer__third flex__container">
        <input
          type="text"
          name="TextInput"
          id="TextInput"
          placeholder="Your Email"
          style={{
            border: `1px solid ${theme.background}`,
            background: theme.secondarytextcolour,
          }}
        />
        <button type="submit">
          <p className="p__poppins">Subscribe</p>
        </button>
      </div>
      <div className="Footer__fourth">
        <ul className="Footer__fourth-links flex__container">
          <li className="links">Careers</li>
          <li className="links">Privacy Policy</li>
          <li className="links">Terms & Conditions</li>
        </ul>
      </div>
      <div className="Footer__fifth">
        <p className="p__poppins" style={{ color: theme.background }}>
          © 2021 Tourism Department.
        </p>
      </div>
    </div>
  );
};

export default Footer;
