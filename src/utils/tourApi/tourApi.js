const API_KEY = process.env.REACT_APP_TOUR_API_KEY;
const baseUrl = "http://apis.data.go.kr/B551011/KorService1";
const MobileOS = "WIN";
const MobileApp = "Trip-Korea";

// 지역 코드와, 지역명을 매칭하기 위한 기능
export const fetchAreaCode = async () => {
  const url = `${baseUrl}/areaCode1?serviceKey=${API_KEY}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchLocationBasedList = async (mapX, mapY, radius = 20000) => {
  const url = `${baseUrl}/locationBasedList1?serviceKey=${API_KEY}&mapX=${mapX}&mapY=${mapY}&radius=${radius}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchContentType = async (contentTypeId) => {
  const url = `${baseUrl}/categoryCode1?serviceKey=${API_KEY}&contentTypeId=${contentTypeId}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
