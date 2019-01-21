import React from "react";
import "./CardStyling.css";

const Character = props => {
  return (
    <div className="container">
      {props.charInfo.map((char, key) => {
        return (
          <div className="card">
            <h1>{char.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Character;
