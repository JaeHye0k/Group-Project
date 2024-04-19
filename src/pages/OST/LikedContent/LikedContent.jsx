import React from "react";
import "./LikedContent.style.css";
import { Container, Row } from "react-bootstrap";

const LikedContent = () => {
  return (
    <div id="liked-content" className="wrapper">
      <Container className="container">
        <h1 className="title">즐겨찾기</h1>
        <hr className="line" />
        <h3 className="subtitle">여행관광정보(컨텐츠하트)</h3>
        <Row>
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="item" key={index}>
              <div className="item-box">
                <div className="heart-img"></div>
              </div>
              <div className="item-content">
                <div className="item-title">오래된 나무</div>
                <div className="item-subtitle">
                  충청남도 홍성군 홍북읍 상하천로 207
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LikedContent;
