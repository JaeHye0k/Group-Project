import React, { useState } from "react";
import "./MapSideBar.style.css";
import { filterdCategoryCode } from "../../../../constants/categoryCode";
import CategoryButton from "./component/CategoryButton/CategoryButton";
import { useSelector } from "react-redux";
import LocationBasedList from "./component/LocationBasedList/LocationBasedList";

const MapSideBar = () => {
  const weather = useSelector((state) => state.kakaoMap.weather);
  const [isFolded, setIsFolded] = useState(false);
  return (
    <div id="map-sidebar" className={`${isFolded ? "folded" : ""}`}>
      <div className="top">
        <div className="location-info">
          <div className="location-name"></div>
          <div className="weather">
            <div className="temperature"> {weather}</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <LocationBasedList />
      </div>
      <ul className="category-list">
        {Object.entries(filterdCategoryCode).map(([code, name], idx) => (
          <li key={idx}>
            <CategoryButton categoryName={name} categoryCode={code} />
          </li>
        ))}
      </ul>
      <button className="btn-fold" onClick={() => setIsFolded(!isFolded)}>
        {isFolded ? "펼치기" : "접기"}
      </button>
    </div>
  );
};

export default MapSideBar;
