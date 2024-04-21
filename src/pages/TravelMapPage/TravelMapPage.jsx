import React, { useEffect } from "react";
import KakaoMap from "./component/KakaoMap/KakaoMap";
import "./TravelMapPage.style.css";
import MapSideBar from "./component/MapSideBar/MapSideBar";
import { useLocation } from "react-router-dom";
import CategoryButtons from "./component/CategoryButtons/CategoryButtons";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { useSelector, useDispatch } from "react-redux";
import { setIsClickMyPosition } from "../../redux/TravelMapStore/kakaoMapSlice";
import Weather from "./component/MapSideBar/component/Weather/Weather";
import LocationName from "./component/MapSideBar/component/LocationName/LocationName";
import { getCurrentLocaition } from "../../utils/kakaoMap/getCurrentLocation";
import { getCurrentWeather } from "../../utils/kakaoMap/getCurrentWeather";
import { clickedLocation } from "./component/KakaoMap/KakaoMap";
import { fetchLocationBasedList } from "../../utils/tourApi/tourApi";
import Loading from "../../common/Loading";
import { useQuery } from "@tanstack/react-query";

let newCurrentLocation;
const TravelMapPage = () => {
  const { pathname } = useLocation();
  const { width, height } = useWindowDimensions();
  let weather = useSelector((state) => state.kakaoMap.weather);

  const dispatch = useDispatch();
  const isClickMyPosition = useSelector(
    (state) => state.kakaoMap.isClickMyPosition
  );
  if (isClickMyPosition === true) {
    dispatch(setIsClickMyPosition(false));
  }

  // 내 위치를 불러옵니다.
  const { data: currentLocation } = useQuery({
    queryKey: ["current-Location"],
    queryFn: () => getCurrentLocaition(),
    refetchOnReconnect: false,
  });
  newCurrentLocation = currentLocation;
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
      fetchLocationBasedList(newCurrentLocation.lng, newCurrentLocation.lat),
    refetchOnReconnect: false,
  });
  useEffect(() => {
    newCurrentLocation = clickedLocation;
    if (clickedLocation) refetch();
  }, [clickedLocation]);

  if (isLoading) {
    return <Loading />;
  }
  if (!weather) {
    weather = currentWeather;
  }
  console.log("locationBasedList", locationBasedList, "weather", weather);
  return (
    <div id="travel-map-page" className={pathname ? "overflow-hidden" : ""}>
      <KakaoMap isClickMyPosition={isClickMyPosition} />
      {locationBasedList ? (
        <MapSideBar
          isClickMyPosition={isClickMyPosition}
          weather={weather}
          locationBasedList={locationBasedList}
        />
      ) : (
        ""
      )}

      {width > 1000 ? <CategoryButtons /> : ""}
      <div className="weather-location">
        {locationBasedList && width < 600 ? (
          <LocationName locationBasedList={locationBasedList} />
        ) : (
          ""
        )}
        {weather && width < 600 ? <Weather weather={weather} /> : ""}
      </div>
    </div>
  );
};

export default TravelMapPage;
