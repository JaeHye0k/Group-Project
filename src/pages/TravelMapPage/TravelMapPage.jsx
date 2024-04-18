import React from "react";
import KakaoMap from "./component/KakaoMap/KakaoMap";
import "./TravelMapPage.style.css";
import MapSideBar from "./component/MapSideBar/MapSideBar";

const TravelMapPage = () => {
  return (
    <div id="travel-map-page">
      <KakaoMap />
      <MapSideBar />
    </div>
  );
};

export default TravelMapPage;
