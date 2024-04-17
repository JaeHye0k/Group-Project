// 모든 카테고리 코드
const allCategoryCode = {
  MT1: "대형마트",
  CS2: "편의점",
  PS3: "어린이집",
  SC4: "학교",
  AC5: "학원",
  PK6: "주차장",
  OL7: "주유소",
  SW8: "지하철",
  BK9: "은행",
  CT1: "문화시설",
  AG2: "중개업소",
  PO3: "공공기관",
  AT4: "관광명소",
  AD5: "숙박",
  FD6: "음식점",
  CE7: "카페",
  HP8: "병원",
  PM9: "약국",
};

// 제외할 카테고리
const excludeCategoryCode = ["AG2", "PO3", "SC4", "AC5", "PS3", "MT1"];

// 필터링된 카테고리 코드
export const filterdCategoryCode = Object.fromEntries(
  Object.entries(allCategoryCode).filter(
    ([key, _]) => !excludeCategoryCode.includes(key)
  )
);
