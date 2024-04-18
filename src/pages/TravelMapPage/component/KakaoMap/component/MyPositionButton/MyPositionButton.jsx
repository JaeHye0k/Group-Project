import React from "react";
import "./MyPositionButton.style.css";

const MyPositionButton = ({ onClickMyPosition }) => {
  return (
    <button id="my-position" onClick={() => onClickMyPosition()}>
      My Position
    </button>
  );
};

export default MyPositionButton;
