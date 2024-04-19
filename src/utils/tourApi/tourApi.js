const API_KEY = process.env.REACT_APP_TOUR_API_KEY;
const baseUrl = "http://apis.data.go.kr/B551011/KorService1";

// 지역 코드와, 지역명을 매칭하기 위한 기능
export const fetchAreaCode = async (
  pageNo = 1,
  numOfRows = 10,
  MobileOS = "WIN",
  MobileApp = "Trip-Korea"
) => {
  const url = `${baseUrl}/areaCode1?serviceKey=${API_KEY}&numOfRows=${numOfRows}&pageNo=${pageNo}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchLocationBasedList = async (
  mapX,
  mapY,
  radius = 20000,
  MobileOS = "WIN",
  MobileApp = "Trip-Korea"
) => {
  console.log(mapX, mapY);
  const url = `${baseUrl}/locationBasedList1?serviceKey=${API_KEY}&mapX=${mapX}&mapY=${mapY}&radius=${radius}&MobileOS=${MobileOS}&MobileApp=${MobileApp}&_type=json`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
