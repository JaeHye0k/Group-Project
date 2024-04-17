import React from "react";
import { Link, Outlet } from "react-router-dom";
import './AppLayout.style.css'
import Button from "../../common/Button";

const AppLayout = () => {
  return (
    <div className="component">
      <div className="navbar">
          <div><img src="/img/logo.png" alt="logo" className="logo-image"/></div>
          

            <div className="meuntext">여행정보</div>
            <div className="meuntext">여행지도</div>
         
          <div >
            <input className="searchbox" placeholder="검색어를 입력하세요"></input>         
            <Button>로그인</Button>
          </div>
      </div>
      <div className="imgBanner"></div>
      <div className="textBanner">
        두근두근 설레는<br/>봄꽃 여행지 추천<br/>
        <Link>자세히보기</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default AppLayout;
