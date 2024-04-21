import React from "react";
import "./MyPositionButton.style.css";
import { useDispatch } from "react-redux";
import { setIsClickMyPosition } from "../../../../../../redux/TravelMapStore/kakaoMapSlice";

const MyPositionButton = () => {
  const dispatch = useDispatch();

  return (
    <li onClick={() => dispatch(setIsClickMyPosition(true))}>
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
