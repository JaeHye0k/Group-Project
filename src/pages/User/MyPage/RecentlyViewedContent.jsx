import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/MyPages.style.css";

const RecentlyViewedContent = () => {
  const navigate = useNavigate();
  const [recentAttractions, setRecentAttractions] = useState([]);

  useEffect(() => {
    const storedAttractions = JSON.parse(
      localStorage.getItem("recentAttractions") || "[]"
    );
    setRecentAttractions(storedAttractions);

    const handleStorageChange = () => {
      const updatedAttractions = JSON.parse(
        localStorage.getItem("recentAttractions") || "[]"
      );
      setRecentAttractions(updatedAttractions);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleClick = (id) => {
    navigate(`/attractions/${id}`);
  };

  return (
    <div className="recently-viewed-content">
      <div className="attraction-boxes">
        {recentAttractions.slice(0, 3).map((attraction) => (
          <div
            key={attraction.id}
            className="attraction-box"
            onClick={() => handleClick(attraction.id)}
          >
            <img src={attraction.firstimage} alt={attraction.title} />
            <div className="title">{attraction.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewedContent;
