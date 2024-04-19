import React from "react";
import "./CategoryButton.style.css";
import { useDispatch } from "react-redux";
import { selectCode } from "../../../../../../redux/TravelMapStore/kakaoMapSlice";

const CategoryButton = ({ categoryName, categoryCode }) => {
  const dispatch = useDispatch();

  return (
    <div id="category-item">
      <button
        className="category-button"
        onClick={() => dispatch(selectCode({ categoryCode }))}
      >
        <span className="category-name">{categoryName}</span>
      </button>
    </div>
  );
};

export default CategoryButton;
