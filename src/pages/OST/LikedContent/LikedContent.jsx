import React from "react";
import "./LikedContent.style.css";
import { Container, Row, Col } from "react-bootstrap";

const LikedContent = () => {
  return (
    <div className="background">
      <Container className="container">
        <h1 className="title">즐겨찾기</h1>
        <hr className="line" />
        <h2 className="subtitle">여행관광정보(컨텐츠하트)</h2>
        <Row>
          {Array.from({ length: 8 }).map((_, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} >
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
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LikedContent;
