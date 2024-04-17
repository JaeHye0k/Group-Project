// 비동기 함수이기 때문에 해당 함수를 호출하는 함수도 비동기 처리 해야 한다.
export const getCurrentLocaition = async () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  const data = await promise;
  const lat = data?.coords.latitude; // 위도 y (0~90)
  const lon = data?.coords.longitude; // 경도 x (0~180)

  return { lat, lon };
};
