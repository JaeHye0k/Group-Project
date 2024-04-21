// useRecentlyViewedItem.js
import { useEffect } from "react";

const useRecentlyViewedItem = (item) => {
  useEffect(() => {
    const recentAttractions = JSON.parse(
      localStorage.getItem("recentAttractions") || "[]"
    );

    // 기존 데이터에서 동일한 attraction이 있는지 확인
    const existingIndex = recentAttractions.findIndex(
      (attraction) => attraction.id === item.id
    );

    // 동일한 attraction이 있으면 제거
    if (existingIndex !== -1) {
      recentAttractions.splice(existingIndex, 1);
    }

    // 새로운 attraction을 배열 앞에 추가
    recentAttractions.unshift(item);

    // 최근 본 컨텐츠는 최대 3개까지만 저장
    if (recentAttractions.length > 3) {
      recentAttractions.pop();
    }

    // 업데이트된 배열을 로컬 스토리지에 저장
    localStorage.setItem(
      "recentAttractions",
      JSON.stringify(recentAttractions)
    );
  }, [item]);
};

export default useRecentlyViewedItem;
