import React, { useEffect, useState } from "react";
import "./KakaoMap.style.css";
import { getCurrentMapArea } from "../../../../utils/kakaoMap/getCurrentMapArea";
import { getCurrentLocaition } from "../../../../utils/kakaoMap/getCurrentLocation";
import { useSelector } from "react-redux";
import MyPositionButton from "./component/MyPositionButton/MyPositionButton";

const { kakao } = window;
const baseUrl = `https://dapi.kakao.com/v2/local`;

// latitude = 위도 (0 ~ 90) y축
// longitude = 경도 (0 ~ 180) x축
// selectedCode 가 변경될 때마다 리렌더링 된다.
// 마커가 갱신되는 상황
// 1. 지도가 드래그 되었을 때
// 2. 지도를 클릭했을 때
// 3. 내 위치 버튼을 클릭했을 때
// test
const KakaoMap = () => {
  const selectedCode = useSelector((state) => state.kakaoMap.selectedCode);
  const isClickMyPosition = useSelector(
    (state) => state.kakaoMap.isClickMyPosition
  );

  // 카카오 맵 객체를 생성하는 함수
  const getKakaoMap = ({ lat, lng }) => {
    const container = document.getElementById("kakao-map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
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

  const showMarker = (map, { lat, lng }) => {
    // 마커를 표시할 위치
    const markerPostiion = new kakao.maps.LatLng(lat, lng);
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
      showMarker(map, { lat: y, lng: x });
    });
  };

  const markByClick = (e, map) => {
    // 클릭한 곳의 위도, 경도 정보를 가져옴
    const latlng = e.latLng;
    showMarker(map, { lat: latlng.getLat(), lng: latlng.getLng() });
  };

  const onClickMyPosition = async () => {
    const location = await getCurrentLocaition();
    const map = getKakaoMap(location);
    showMarker(map, location);
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
          showMarker(map, { lat: y, lng: x });
        });
      } else {
        showMarker(map, location);
      }
      // 지도 드래그 이벤트 발생 시
      kakao.maps.event.addListener(map, "dragend", () => mapDragHandler(map));
      kakao.maps.event.addListener(map, "click", (e) => markByClick(e, map));
    };
    showKakaoMap();
  }, [selectedCode]);
  return (
    <div id="kakao-map">
      <MyPositionButton />
    </div>
  );
};

export default KakaoMap;
