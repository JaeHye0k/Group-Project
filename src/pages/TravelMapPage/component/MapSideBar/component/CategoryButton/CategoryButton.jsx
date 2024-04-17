import React from "react";
import "./CategoryButton.style.css";
import { useDispatch } from "react-redux";
import { selectCode } from "../../../../../../redux/kakaoMapStore/reducers/kakaoMapSlice";

const CategoryButton = ({ categoryName, categoryCode }) => {
  const dispatch = useDispatch();

  return (
    <button
      id="category-button"
      onClick={() => dispatch(selectCode({ categoryCode }))}
    >
      {categoryName}
    </button>
  );
};

export default CategoryButton;
