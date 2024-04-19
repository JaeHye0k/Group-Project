import React, { useEffect, useState } from "react";
import "./MapSideBar.style.css";
import { filterdCategoryCode } from "../../../../constants/categoryCode";
import CategoryButton from "./component/CategoryButton/CategoryButton";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import LocationBasedList from "./component/LocationBasedList/LocationBasedList";
import { getCurrentLocaition } from "../../../../utils/kakaoMap/getCurrentLocation";
import { getCurrentWeather } from "../../../../utils/kakaoMap/getCurrentWeather";

const MapSideBar = () => {
  // console.log("render");
  let weather = useSelector((state) => state.kakaoMap.weather);
  const locationName = useSelector((state) => state.kakaoMap.locationName);
  const initialMap = useSelector((state) => state.kakaoMap.initialMap);
  const center = initialMap?.getCenter();
  const [isFolded, setIsFolded] = useState(false);
  // 내 위치를 불러옵니다.
  const { data: currentLocation } = useQuery({
    queryKey: ["current-Location"],
    queryFn: () => getCurrentLocaition(),
  });
  // 내 위치의 날씨를 불러옵니다
  const { data: currentWeather } = useQuery({
    queryKey: ["current-weather"],
    queryFn: () => getCurrentWeather(currentLocation.lat, currentLocation.lng),
  });
  if (!weather) {
    weather = currentWeather;
  }
  // useEffect(() => {}, [locationName]);
  console.log(currentWeather);
  return (
    <div id="map-sidebar" className={`${isFolded ? "folded" : ""}`}>
      <div className="top">
        <div className="location-info">
          <div className="location-name">{locationName}</div>
          <div className="weather">
            <div className="description">
              현재 날씨{weather?.weather[0].description}
            </div>
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            ></img>
            <div>{weather?.main.temp}℃</div>
            <div>
              {weather?.main.temp_max} / {weather?.main.temp_min}{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        {initialMap ? <LocationBasedList center={center} /> : ""}
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
