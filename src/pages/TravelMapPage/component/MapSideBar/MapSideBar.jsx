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

const MapSideBar = ({ isClickMyPosition }) => {
  let weather = useSelector((state) => state.kakaoMap.weather);
  const { height, width } = useWindowDimensions();
  const [isFolded, setIsFolded] = useState(false);
  // 내 위치를 불러옵니다.
  const { data: currentLocation } = useQuery({
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
