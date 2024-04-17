import React from "react";
import { useDispatch } from "react-redux";
import { clickMyPosition } from "../../../../../../redux/kakaoMapStore/reducers/kakaoMapSlice";
import "./MyPositionButton.style.css";

const MyPositionButton = () => {
  const dispatch = useDispatch();

  return (
    <button id="my-position" onClick={() => dispatch(clickMyPosition())}>
      My Position
    </button>
  );
};

export default MyPositionButton;
