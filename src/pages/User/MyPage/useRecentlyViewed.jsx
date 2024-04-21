// useRecentlyViewed.js
const useRecentlyViewed = (attraction) => {
  const recentAttractions = JSON.parse(
    localStorage.getItem("recentAttractions") || "[]"
  );
  const index = recentAttractions.findIndex(
    (item) => item.id === attraction.id
  );
  if (index !== -1) {
    recentAttractions.splice(index, 1);
  }
  recentAttractions.unshift(attraction);
  if (recentAttractions.length > 3) {
    recentAttractions.pop();
  }
  localStorage.setItem("recentAttractions", JSON.stringify(recentAttractions));
};

export default useRecentlyViewed;
