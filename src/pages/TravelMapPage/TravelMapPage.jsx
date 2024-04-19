import React from "react";
import KakaoMap from "./component/KakaoMap/KakaoMap";
import "./TravelMapPage.style.css";
import MapSideBar from "./component/MapSideBar/MapSideBar";
import { useLocation } from "react-router-dom";

const TravelMapPage = () => {
  const { pathname } = useLocation();
  return (
    <div id="travel-map-page" className={pathname ? "overflow-hidden" : ""}>
      <KakaoMap />
      <MapSideBar />
    </div>
  );
};

export default TravelMapPage;
