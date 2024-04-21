import React from "react";
import "./MyPositionButton.style.css";

const MyPositionButton = () => {
  return (
    <li onClick={() => window.location.reload()}>
      <img
        src="/images/TravelMapPageImage/my-position.png"
        alt="current-location"
        className="category-icon"
      ></img>
      <button id="my-position">내 위치</button>
    </li>
  );
};

export default MyPositionButton;
