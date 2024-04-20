import React from "react";
import KakaoMap from "./component/KakaoMap/KakaoMap";
import "./TravelMapPage.style.css";
import MapSideBar from "./component/MapSideBar/MapSideBar";
import { useLocation } from "react-router-dom";
import CategoryButtons from "./component/CategoryButtons/CategoryButtons";
import useWindowDimensions from "../../hooks/useWindowDimension";

const TravelMapPage = () => {
  const { pathname } = useLocation();
  const { width, height } = useWindowDimensions();
  return (
    <div id="travel-map-page" className={pathname ? "overflow-hidden" : ""}>
      <KakaoMap />
      <MapSideBar />
      {width > 1000 ? <CategoryButtons /> : ""}
    </div>
  );
};

export default TravelMapPage;
