import React, { useEffect, useRef, useState } from "react";
import "./MapSideBar.style.css";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import LocationBasedList from "./component/LocationBasedList/LocationBasedList";
import { getCurrentLocaition } from "../../../../utils/kakaoMap/getCurrentLocation";
import { getCurrentWeather } from "../../../../utils/kakaoMap/getCurrentWeather";
import { clickedLocation } from "../KakaoMap/KakaoMap";
import { fetchLocationBasedList } from "../../../../utils/tourApi/tourApi";
import CategoryButtons from "../CategoryButtons/CategoryButtons";
import useWindowDimensions from "../../../../hooks/useWindowDimension";

const MapSideBar = () => {
  // console.log("render");
  let weather = useSelector((state) => state.kakaoMap.weather);
  const { height, width } = useWindowDimensions();
  const locationName = useRef(null);
  // console.log("locationName", locationName);
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
  const { data: locationBasedList } = useQuery({
    queryKey: ["location-based-list"],
    queryFn: () =>
      fetchLocationBasedList(clickedLocation.lng, clickedLocation.lat),
  });

  useEffect(() => {
    const datas = locationBasedList?.response?.body.items.item;
    console.log("useEffect", datas);
    if (datas) {
      locationName.current = datas[0].addr1?.split(" ").slice(0, 3).join(" ");
    }
  }, [clickedLocation]);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  if (!weather) {
    weather = currentWeather;
  }
  // console.log("weather", weather);
  return (
    <div id="map-sidebar" className={`${isFolded ? "folded" : ""}`}>
      <div className="top">
        <div className="location-info">
          <div className="location-name">{locationName.current}</div>
          <div className="weather">
            <div className="weather-rt">
              <div className="description">현재 날씨</div>
              <img
                className="weather-image"
                src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              ></img>
              <div>{weather?.main.temp}℃</div>
            </div>
            <div className="weather-min-max">
              {weather?.main.temp_max}℃ / {weather?.main.temp_min} ℃
            </div>
          </div>
        </div>
        <div className="category-buttons-wrapper">
          {width <= 700 ? <CategoryButtons /> : ""}
        </div>
      </div>
      <div className="bottom">
        {initialMap ? <LocationBasedList center={center} /> : ""}
      </div>
      <button className="btn-fold" onClick={() => setIsFolded(!isFolded)}>
        {isFolded ? "펼치기" : "접기"}
      </button>
    </div>
  );
};

export default MapSideBar;
