import React from "react";
import "./MyPage.style.css";

const MyPage = () => {
  return (
    <div className="mypage-container">
      <div className="black-box">
        <div className="white-circle">
          <div className="gear-icon"></div>
        </div>
        <div className="white-text">반가워요</div>
        <div className="white-text name">SEUNGTAEK님</div>
      </div>
      <div className="white-box">
        <h2 className="mypage-title">마이페이지</h2>
        <p className="subtitle">기본정보</p>
        <input type="text" className="input-box" placeholder="nickname" />
        <input type="email" className="input-box" placeholder="mail@mail.com" />
        <input type="password" className="input-box" placeholder="********" />
        <button className="edit-button">수정하기</button>
        <p className="subtitle">즐겨찾기</p>
        <div style={{ textAlign: "center" }}>
          <div className="favorite-box">
            <span>컨텐츠하트</span>
          </div>
          <div className="favorite-box">
            <span>지도북마크</span>
          </div>
        </div>
        <p className="subtitle">최근 본 컨텐츠</p>
        <div style={{ textAlign: "center" }}>
          <div className="recent-content">
            <div className="content-box"></div>
            <div>오래된 나무</div>
            <div>충청남도 어쩌구</div>
          </div>
          <div className="recent-content">
            <div className="content-box"></div>
            <div>오래된 나무</div>
            <div>충청남도 어쩌구</div>
          </div>
          <div className="recent-content">
            <div className="content-box"></div>
            <div>오래된 나무</div>
            <div>충청남도 어쩌구</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
