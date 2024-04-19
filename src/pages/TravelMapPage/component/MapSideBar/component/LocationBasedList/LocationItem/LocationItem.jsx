import React from "react";
import "./LocationItem.style.css";
import { everyThreeDigit } from "../../../../../../../utils/RegExp";

const LocationItem = ({ item, key }) => {
  return (
    <li key={key} className="location-item">
      <div className="thumbnail">
        <img src={item.firstimage || item.firstimage2} alt="썸네일" />
      </div>
      <div className="overview">
        <div className="name">{item.title}</div>
        <div className="from-here">
          여기로 부터 {everyThreeDigit(Math.floor(item.dist))}m
        </div>
      </div>
    </li>
  );
};

export default LocationItem;
