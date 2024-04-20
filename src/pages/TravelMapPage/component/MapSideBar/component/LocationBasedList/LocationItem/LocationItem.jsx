import React, { useEffect } from "react";
import "./LocationItem.style.css";
import { everyThreeDigit } from "../../../../../../../utils/RegExp";
import { useNavigate } from "react-router-dom";
import { fetchContentType } from "../../../../../../../utils/tourApi/tourApi";
import { useQuery } from "@tanstack/react-query";

const LocationItem = ({ item }) => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["category-type"],
    queryFn: () => fetchContentType(item.contenttypeid),
    enabled: !!item,
    refetchOnReconnect: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  console.log("locationItem");
  const contentType = data?.response?.body.items.item[0].name;
  // console.log(item.title, contentType);
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
          <div className="content-type">{contentType}</div>
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
