import React from "react";
import { filterdCategoryCode } from "../../../../constants/categoryCode";
import CategoryButton from "../MapSideBar/component/CategoryButton/CategoryButton";
import MyPositionButton from "../KakaoMap/component/MyPositionButton/MyPositionButton";
import "./CategoryButtons.style.css";

const category_images = {
  CS2: `./images/TravelMapPageImage/store_category_pc.png`,
  PK6: "./images/TravelMapPageImage/parking_category_pc.png",
  OL7: "./images/TravelMapPageImage/oil_category_pc.png",
  SW8: "./images/TravelMapPageImage/train_category_pc.png",
  BK9: "./images/TravelMapPageImage/bank_category_pc.png",
  CT1: "./images/TravelMapPageImage/hanok_category_pc.png",
  AT4: "./images/TravelMapPageImage/attraction_category_pc.png",
  AD5: "./images/TravelMapPageImage/motel_category_pc.png",
  FD6: "./images/TravelMapPageImage/dining_category_pc.png",
  CE7: "./images/TravelMapPageImage/cafe_category_pc.png",
  HP8: "./images/TravelMapPageImage/hospital_category_pc.png",
  PM9: "./images/TravelMapPageImage/pharmacy_category_pc.png",
};

const CategoryButtons = () => {
  return (
    <>
      <ul className="category-list">
        <li className="category-title">
          <div>카테고리 선택</div>
        </li>
        <div className="category-buttons">
          {Object.entries(filterdCategoryCode).map(([code, name], idx) => (
            <div key={idx}>
              <li>
                <img
                  src={category_images[code]}
                  alt={`${name} 아이콘`}
                  className="category-icon"
                />
                <CategoryButton categoryName={name} categoryCode={code} />
              </li>
            </div>
          ))}
          <div>
            <MyPositionButton />
          </div>
        </div>
      </ul>
    </>
  );
};

export default CategoryButtons;
