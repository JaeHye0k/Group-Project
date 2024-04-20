import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocationBasedList } from "../../../../../../utils/tourApi/tourApi";
import { useQuery } from "@tanstack/react-query";
import "./LocationBasedList.style.css";
import LocationItem from "./LocationItem/LocationItem";
import { setLocationName } from "../../../../../../redux/TravelMapStore/kakaoMapSlice";

// 렌더링 -> 함수 몸체 실행 -> useEffect

const LocationBasedList = ({ locationBasedList }) => {
  const data = locationBasedList;
  console.log("locationBasedList", data);
  const datas = data?.response?.body.items.item;
  return (
    <ul className="location-based-list">
      {datas?.map((item, key) => {
        // 썸네일이 있을 경우에만 표시
        if (item.firstimage || item.firstimage2) {
          return <LocationItem key={key} item={item} />;
        }
      })}
    </ul>
  );
};

export default LocationBasedList;
