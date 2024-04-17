// 지도 객체를 전달하면 해당 지도의 사각형 영역을 반환하는 함수

export const getCurrentMapArea = (map) => {
  const rect = map.getBounds();
  const sw = rect.getSouthWest();
  const ne = rect.getNorthEast();
  const leftBottomX = sw.getLng();
  const leftBottomY = sw.getLat();
  const rightUpX = ne.getLng();
  const rightUpY = ne.getLat();
  return [leftBottomX, leftBottomY, rightUpX, rightUpY];
};
