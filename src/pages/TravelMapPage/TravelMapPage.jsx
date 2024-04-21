import React, { useEffect } from "react";
import KakaoMap from "./component/KakaoMap/KakaoMap";
import "./TravelMapPage.style.css";
import MapSideBar from "./component/MapSideBar/MapSideBar";
import { useLocation } from "react-router-dom";
import CategoryButtons from "./component/CategoryButtons/CategoryButtons";
import useWindowDimensions from "../../hooks/useWindowDimension";
import { useSelector, useDispatch } from "react-redux";
import { setIsClickMyPosition } from "../../redux/TravelMapStore/kakaoMapSlice";

const TravelMapPage = () => {
  const { pathname } = useLocation();
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();
  const isClickMyPosition = useSelector(
    (state) => state.kakaoMap.isClickMyPosition
  );
  if (isClickMyPosition === true) {
    dispatch(setIsClickMyPosition(false));
  }
  return (
    <div id="travel-map-page" className={pathname ? "overflow-hidden" : ""}>
      <KakaoMap isClickMyPosition={isClickMyPosition} />
      <MapSideBar isClickMyPosition={isClickMyPosition} />
      {width > 1000 ? <CategoryButtons /> : ""}
    </div>
  );
};

export default TravelMapPage;
