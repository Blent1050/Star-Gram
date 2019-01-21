import React from "react";

const Character = props => {
  return (
    <div>
      {props.charInfo.map((char, key) => {
        return (
          <>
            <h1>{char.name}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Character;
