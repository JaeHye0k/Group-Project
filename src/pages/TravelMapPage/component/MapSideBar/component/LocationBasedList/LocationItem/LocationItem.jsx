import React from "react";
import "./LocationItem.style.css";
import { everyThreeDigit } from "../../../../../../../utils/RegExp";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const LocationItem = ({ item }) => {
  const navigate = useNavigate();
  const contentType = useSelector((state) => state.kakaoMap.contentType);
  return (
    <li
      className="location-item"
      onClick={() => navigate(`/attractions/${item.contentid}`)}
    >
      <div className="thumbnail">
        <img src={item.firstimage || item.firstimage2} alt="썸네일" />
      </div>
      <div className="overview">
        <div className="name-contentType">
          <div className="name">{item.title}</div>
          <div className="content-type">{contentType[item.cat1]}</div>
        </div>
        <div className="from-here">
          여기로 부터 {everyThreeDigit(Math.floor(item.dist))}m
        </div>
        <div className="address">{item.addr1}</div>
      </div>
    </li>
  );
};

export default LocationItem;
