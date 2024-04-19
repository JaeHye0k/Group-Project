import React from "react";
import "./MapSideBar.style.css";
import { filterdCategoryCode } from "../../../../constants/categoryCode";
import CategoryButton from "./component/CategoryButton/CategoryButton";
import { useSelector } from "react-redux";

const MapSideBar = () => {
  const weather = useSelector((state) => state.kakaoMap.weather);
  return (
    <div id="map-sidebar">
      <div className="left"></div>
      <div className="right">
        <div className="location-info">
          <div className="location-name"></div>
          <div className="weather">
            <div className="temperature"> {weather}</div>
          </div>
        </div>
        <ul className="category-list">
          {Object.entries(filterdCategoryCode).map(([code, name], idx) => (
            <li key={idx}>
              <CategoryButton categoryName={name} categoryCode={code} />
            </li>
          ))}
        </ul>
      </div>

      <ul></ul>
    </div>
  );
};

export default MapSideBar;
