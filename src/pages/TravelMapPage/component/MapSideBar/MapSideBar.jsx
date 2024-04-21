import React, { useState } from "react";
import "./MapSideBar.style.css";
import LocationBasedList from "./component/LocationBasedList/LocationBasedList";
import CategoryButtons from "../CategoryButtons/CategoryButtons";
import useWindowDimensions from "../../../../hooks/useWindowDimension";
import LocationName from "./component/LocationName/LocationName";
import Weather from "./component/Weather/Weather";

const MapSideBar = ({ isClickMyPosition, weather, locationBasedList }) => {
  const { height, width } = useWindowDimensions();
  const [isFolded, setIsFolded] = useState(false);

  return (
    <div id="map-sidebar" className={`${isFolded ? "folded" : ""}`}>
      <div className="top">
        {locationBasedList && width >= 600 ? (
          <LocationName locationBasedList={locationBasedList} />
        ) : (
          ""
        )}
        {weather && width >= 600 ? <Weather weather={weather} /> : ""}

        <div className="category-buttons-wrapper">
          {width <= 1000 ? <CategoryButtons /> : ""}
        </div>
      </div>
      <div className="bottom">
        {locationBasedList ? (
          <LocationBasedList locationBasedList={locationBasedList} />
        ) : (
          ""
        )}
      </div>
      <button className="btn-fold" onClick={() => setIsFolded(!isFolded)}>
        {isFolded ? "펼치기" : "접기"}
      </button>
    </div>
  );
};

export default MapSideBar;
