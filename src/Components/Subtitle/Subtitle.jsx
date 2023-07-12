import React from "react";
import "./Subtitle.css";

const Subtitle = ({ theme, textGroup }) => {
  return (
    <div className="Subtitle__heading">
      <div className="p__heading">
        <p>
          <span style={{ color: theme.lifeJourney }}>{textGroup.text1}</span>{" "}
          {textGroup.text2}
        </p>
      </div>
    </div>
  );
};

export default Subtitle;
