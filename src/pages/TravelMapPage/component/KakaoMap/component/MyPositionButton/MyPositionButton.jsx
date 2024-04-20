import React, { useEffect } from "react";
import "./MyPositionButton.style.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsClickMyPosition } from "../../../../../../redux/TravelMapStore/kakaoMapSlice";

const MyPositionButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      id="my-position"
      onClick={() => dispatch(setIsClickMyPosition(true))}
    >
      내 위치
    </button>
  );
};

export default MyPositionButton;
