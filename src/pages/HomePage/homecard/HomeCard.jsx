
import React, { useEffect, useState } from "react";
import "./HomeCard.style.css";
import AttractionCard from "../../../common/attractionCard/AttractionCard";
import { fetchAttractions } from "../../../redux/AttractionPage/attractionsSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeCard = () => {
  const attractionList = useSelector(
    (state) => state.attraction.attractionList
  );
  const data = attractionList?.response?.body.items.item;
  const dispatch = useDispatch();
  if (attractionList?.length === 0) {
    dispatch(fetchAttractions());
  }

  return (
    <div className="homecard-responsive">
      <div className="homecard-wrapper">
        <h3 className="mid-title">함께 떠나는 힐링테마 여행</h3>
        <div className="cardPosition">
          <br />
          <br />

          {data?.map((item, key) => {
            if (item.firstimage && item.firstimage2) {
              return <AttractionCard item={item} key={key} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
