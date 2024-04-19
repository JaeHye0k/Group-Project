import React, { useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import "./AppLayout.style.css";
import Button from "../../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const AppLayout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            src="/img/logo.png"
            alt="logo"
            className="logo-image"
            onClick={() => navigateTo("/")}
          />
        </div>
        <div className="menu-texts">
          <div className="menu-text" onClick={() => navigateTo("/")}>
            여행정보
          </div>
          <div className="menu-text" onClick={() => navigateTo("/map")}>
            여행지도
          </div>
        </div>

        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen && (
            <div>
              <div className="close-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
              <p className="mobile-menu-item" onClick={() => navigateTo("/")}>
                여행정보
              </p>
              <p
                className="mobile-menu-item"
                onClick={() => navigateTo("/map")}
              >
                여행지도
              </p>
              <Button>로그인</Button>
            </div>
          )}
        </div>

        <div className="search_login">
          <div className="searchbox">
            <input className="input" placeholder="검색어를 입력하세요"></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={onSearch} />
          </div>
          <button className="moblieLoginBtn">
            <Link to="/signin">로그인</Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
