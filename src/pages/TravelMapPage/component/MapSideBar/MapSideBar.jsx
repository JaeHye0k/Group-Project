import React from "react";
import "./MapSideBar.style.css";
import { filterdCategoryCode } from "../../../../constants/categoryCode";
import CategoryButton from "./component/CategoryButton/CategoryButton";

const MapSideBar = () => {
  return (
    <div id="map-sidebar">
      <ul className="category-buttons">
        {Object.entries(filterdCategoryCode).map(([code, name], idx) => (
          <li key={idx}>
            <CategoryButton categoryName={name} categoryCode={code} />
          </li>
        ))}
      </ul>
      <hr />
      <ul></ul>
    </div>
  );
};

export default MapSideBar;
