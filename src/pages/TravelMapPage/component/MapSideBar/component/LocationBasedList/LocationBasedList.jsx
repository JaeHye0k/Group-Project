import React from "react";
import { useSelector } from "react-redux";
import { fetchLocationBasedList } from "../../../../../../utils/tourApi/tourApi";
import { useQuery } from "@tanstack/react-query";

const LocationBasedList = () => {
  const center = useSelector((state) => state.kakaoMap.center);
  const { data, isLoading, isError, error, isFetched } = useQuery({
    queryKey: ["location-based"],
    queryFn: () =>
      fetchLocationBasedList(center.lng, center.lat, center.radius),
    enabled: !!Object.keys(center).length, // center 값이 있을때만 fetch
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  if (isFetched) {
    const datas = data.response.body.items.item;
    console.log(datas);
    return (
      <ul>
        {datas.map((item, idx) => {
          // 썸네일이 있을 경우에만 표시
          if (item.firstimage || item.firstimage2) {
            return (
              <li key={idx}>
                <img src={item.firstimage || item.firstimage2} alt="썸네일" />
                <div>{item.title}</div>
              </li>
            );
          }
        })}
      </ul>
    );
  }
};

export default LocationBasedList;
