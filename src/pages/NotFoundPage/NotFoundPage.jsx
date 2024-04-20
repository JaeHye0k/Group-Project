import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.style.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">
        페이지를 찾을 수 없습니다
        <br />
        요청하신 페이지가 존재하지 않거나, URL이 잘못되었습니다.
      </p>
      <button className="home-button" onClick={handleGoHome}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default NotFoundPage;
