import React from "react";
import "./LikedContent.style.css";
import { Container, Row, Col } from "react-bootstrap";

const LikedContent = () => {
  return (
    <div className="wrapper">
      <Container className="container">
        <h1 className="title">즐겨찾기</h1>
        <hr className="line" />
        <h3 className="subtitle">여행관광정보(컨텐츠하트)</h3>
        <Row>
          {Array.from({ length: 10 }).map((_, index) => (
              <div className="item">
                <div className="item-box">
                  <div className="heart"></div>
                </div>
                <div className="item-content">
                  <h3 className="item-title">오래된 나무</h3>
                  <p className="item-subtitle" />
                  충청남도 홍성군 홍북읍 상하천로 207
                </div>
              </div>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LikedContent;
