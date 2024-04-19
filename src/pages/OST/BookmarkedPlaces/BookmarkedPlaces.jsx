import React from "react";
import "./BookmarkedPlaces.style.css";
import { Container, Row } from "react-bootstrap";

const BookmarkedPlaces = () => {
  return (
    <div id="bookmarked-places" className="wrapper">
      <Container className="container">
        <div className="title-container">
          <h1 className="title">즐겨찾기</h1>
          <button className="map-search-btn">지도로보기</button>
        </div>
        <hr className="line" />
        <h3 className="subtitle">지도정보(지도북마크)</h3>
        <Row>
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="item" key={index}>
              <div className="item-box">
                <div className="bookmark-img"></div>
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

export default BookmarkedPlaces;
