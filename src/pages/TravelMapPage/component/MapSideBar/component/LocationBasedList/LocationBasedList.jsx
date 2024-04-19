import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchLocationBasedList } from "../../../../../../utils/tourApi/tourApi";
import { useQuery } from "@tanstack/react-query";
import "./LocationBasedList.style.css";
import LocationItem from "./LocationItem/LocationItem";

// 렌더링 -> 함수 몸체 실행 -> useEffect

const LocationBasedList = () => {
  console.log("render!");
  const center = useSelector((state) => state.kakaoMap.center);
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["location-based"],
    queryFn: () =>
      fetchLocationBasedList(center.lng, center.lat, center.radius),
    enabled: !!Object.keys(center).length, // center 값이 있을때만 fetch
  });

  useEffect(() => {
    if (!!Object.keys(center).length) {
      refetch();
    }
  }, [center]);

  const datas = data?.response?.body.items.item;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

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
