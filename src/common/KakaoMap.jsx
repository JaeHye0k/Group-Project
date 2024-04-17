import React, { useEffect, useState } from "react";
import "./KakaoMap.style.css";
import { useCategoryQuery } from "../hooks/useCategory";

const { kakao } = window;
const baseUrl = `https://dapi.kakao.com/v2/local`;

const KakaoMap = () => {
  const setCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude; // 위도 y (0~90)
      let lon = position.coords.longitude; // 경도 x (0~180)
      showKakaoMap(lat, lon);
    });
  };
  const showKakaoMap = (lat, lon) => {
    const container = document.getElementById("kakao-map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    const searchByCategory = async () => {
      const rect = map.getBounds();
      const sw = rect.getSouthWest();
      const ne = rect.getNorthEast();
      const url =
        baseUrl +
        `/search/category?category_group_code=FD6&rect=${sw.getLng()},${sw.getLat()},${ne.getLng()},${ne.getLat()}`;
      const response = await fetch(url, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY_REST}`,
        },
      });
      const data = await response.json();
      console.log(data);
    };
    searchByCategory();
  };
  useEffect(() => {
    setCurrentPosition();
  }, []);
  return <div id="kakao-map" />;
};

export default KakaoMap;
