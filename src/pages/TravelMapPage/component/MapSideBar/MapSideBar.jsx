import React, { useEffect, useRef, useState } from "react";
import "./MapSideBar.style.css";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import LocationBasedList from "./component/LocationBasedList/LocationBasedList";
import { getCurrentLocaition } from "../../../../utils/kakaoMap/getCurrentLocation";
import { getCurrentWeather } from "../../../../utils/kakaoMap/getCurrentWeather";
import { clickedLocation } from "../KakaoMap/KakaoMap";
import { fetchLocationBasedList } from "../../../../utils/tourApi/tourApi";
import CategoryButtons from "../CategoryButtons/CategoryButtons";
import useWindowDimensions from "../../../../hooks/useWindowDimension";
import Loading from "../../../../common/Loading";
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
