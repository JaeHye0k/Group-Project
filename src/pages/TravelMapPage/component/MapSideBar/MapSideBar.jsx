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
import Loading from "../../../../common/Loading";

const MapSideBar = () => {
  // console.log("render");
  let weather = useSelector((state) => state.kakaoMap.weather);
  const { height, width } = useWindowDimensions();
  const locationName = useRef(null);
  const [isFolded, setIsFolded] = useState(false);

  // 내 위치를 불러옵니다.
  const { data: currentLocation, refetch: refetchLocation } = useQuery({
    queryKey: ["current-Location"],
    queryFn: () => getCurrentLocaition(),
    refetchOnReconnect: false,
  });

  // 내 위치의 날씨를 불러옵니다
  const { data: currentWeather } = useQuery({
    queryKey: ["current-weather"],
    queryFn: () => getCurrentWeather(currentLocation.lat, currentLocation.lng),
    refetchOnReconnect: false,
  });

  // 위치 기반 근처 관광지 정보를 불러옵니다
  const {
    data: locationBasedList,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["location-based-list"],
    queryFn: () =>
      fetchLocationBasedList(clickedLocation.lng, clickedLocation.lat),
    refetchOnReconnect: false,
  });

  useEffect(() => {
    console.log("useEffect!", locationBasedList);
    const datas = locationBasedList?.response?.body.items.item;
    if (datas) {
      locationName.current = datas[0].addr1?.split(" ").slice(0, 3);
    }

    if (clickedLocation) refetch();
  }, [clickedLocation]);

  if (isLoading) {
    return <Loading />;
  }
  if (!weather) {
    weather = currentWeather;
  }

  return (
    <div id="map-sidebar" className={`${isFolded ? "folded" : ""}`}>
      <div className="top">
        <div className="location-info">
          <div className="location-name1">{locationName?.current?.[0]}</div>
          <div className="location-name2">
            {locationName?.current?.[1]} {locationName?.current?.[2]}
          </div>
        </div>
        <div className="weather">
          <div className="weather-content">
            <div className="description">
              현재 온도 {weather?.main.temp.toFixed(1)}℃
            </div>

            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
            ></img>
            <div className="weather-min-max">
              <div>최고온도</div> <div>최저온도</div>
              <div>{weather?.main.temp_max.toFixed(1)} ℃</div>
              <div>{weather?.main.temp_min.toFixed(1)} ℃</div>
            </div>
          </div>
        </div>
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
