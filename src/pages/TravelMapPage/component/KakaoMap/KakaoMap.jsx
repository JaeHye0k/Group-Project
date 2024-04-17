import React, { useEffect, useState } from "react";
import "./KakaoMap.style.css";
import { getCurrentMapArea } from "../../../../utils/getCurrentMapArea";
import { getCurrentLocaition } from "../../../../utils/getCurrentLocation";
import { useSelector } from "react-redux";

const { kakao } = window;
const baseUrl = `https://dapi.kakao.com/v2/local`;

// latitude = 위도 (0 ~ 90) y축
// longitude = 경도 (0 ~ 180) x축

const KakaoMap = () => {
  const selectedCode = useSelector((state) => state.kakaoMap.selectedCode);

  // 카카오 맵 객체를 생성하는 함수
  const getKakaoMap = ({ lat, lon }) => {
    const container = document.getElementById("kakao-map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(lat, lon), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    return map;
  };

  // 카테고리를 기준으로 데이터를 호출하는 기능
  const searchByCategory = async (map) => {
    const rect = getCurrentMapArea(map).join(","); // 지도의 사각형 영역 구하기
    const categoryGroupCode = selectedCode;
    const url = `${baseUrl}/search/category?category_group_code=${categoryGroupCode}&rect=${rect}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_API_KEY_REST}`,
      },
    });
    const data = await response.json();
    return data;
  };

  const showMarker = (map, { lat, lon }) => {
    // 마커를 표시할 위치
    const markerPostiion = new kakao.maps.LatLng(lat, lon);
    // 마커 생성
    const marker = new kakao.maps.Marker({
      position: markerPostiion,
    });
    marker.setMap(map);
  };

  // 지도 드래그 핸들러
  const mapDragHandler = async (map) => {
    const categorizedData = await searchByCategory(map);
    categorizedData.documents.forEach(({ x, y }) => {
      showMarker(map, { lat: y, lon: x });
    });
  };

  useEffect(() => {
    const showKakaoMap = async () => {
      // 내 위치
      const location = await getCurrentLocaition();
      const map = getKakaoMap(location);
      const categorizedData = await searchByCategory(map);
      if (selectedCode) {
        // 선택된 카테고리가 있다면 해당되는 곳에 마커 표시
        categorizedData.documents.forEach(({ x, y }) => {
          showMarker(map, { lat: y, lon: x });
        });
      } else {
        // 선택된 카테고리가 없다면 현재 위치에 마커 표시
        showMarker(map, location);
      }
      // 지도 드래그 이벤트 발생 시
      kakao.maps.event.addListener(map, "dragend", () => mapDragHandler(map));
    };
    showKakaoMap();
  }, [selectedCode]);
  return <div id="kakao-map" />;
};

export default KakaoMap;
