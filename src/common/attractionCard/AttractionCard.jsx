import { useNavigate } from "react-router-dom";
import "./attractionCard.style.css";
import React from "react";

const AttractionCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/attractions/${item.contentid}`);
  };
  return (
    <div onClick={showDetail}>
      <div className="common-card">
        <img className="attraction-img" src={item?.firstimage} alt="" />
        <div className="attraction-card-box">
          <strong>{item?.title}</strong>
          <span className="attraction-card-text">{item?.addr1}</span>
        </div>
      </div>
    </div>
  );
};

export default AttractionCard;
