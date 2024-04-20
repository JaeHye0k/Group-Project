import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AppLayout.style.css";
import Button from '../../common/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const AppLayout = () => {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser); // 현재 사용자 상태를 가져온다.

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false); // 메뉴 선택 후 메뉴 닫기
  };

  const onSearch = () => {};

  return (
    <div className="app-layout">
      <nav className="app-navbar">
        <FontAwesomeIcon
          className="menu-button"
          size="lg"
          icon={faBars}
          onClick={toggleMenu}
        />
        <div>
          <img
            src="./images/logo.png"
            alt="logo"
            className="logo-image"
            onClick={() => navigateTo("/")}
          />
        </div>
        <div className="menu-texts">
          <div className="menu-text" onClick={() => navigateTo("/attractions")}>
            여행정보
          </div>
          <div className="menu-text" onClick={() => navigateTo("/map")}>
            여행지도
          </div>
        </div>
        <div className="search_login">
          <div className="searchbox">
            <input className="input" placeholder="검색어를 입력하세요"></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={onSearch} />
          </div>
          <div className="moblieLoginBtn"> {/* 모바일때 메뉴 안보이게 하는 css */}
            {/* <Link to="/login">로그인</Link> PC화면 로그인 자리*/} 
            {currentUser ? (
              <Button onClick={() => {
                // dispatch(clearUser());
                navigateTo("/"); // 로그아웃 후 홈으로 이동
              }}>로그아웃</Button>
            ) : (
              <Button onClick={() => navigateTo("/signup")}>로그인</Button>
            )}
          </div>
    
        {/* 모바일 화면 */}
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen && (
            <div>
              <div className="close-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <p className="mobile-menu-item" onClick={() => navigateTo("/")}>
                여행정보
              </p>
              <p className="mobile-menu-item" onClick={() => navigateTo("/map")}>
                여행지도
              </p>
              <Button onClick={() => navigateTo("/signup")}>로그인</Button>
            </div>
          )}
        </div>
        {/* 모바일 화면 */}
        
        </div>
      </nav>
      <Outlet />
    
    </div>
  );
};

export default AppLayout;