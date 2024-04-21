import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./AppLayout.style.css";
import Button from '../../common/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { clearUser } from "../../redux/user/auth/authSlice";


const AppLayout = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentUser = useSelector((state) => state.auth.currentUser); // 현재 사용자 상태를 가져온다.
  // console.log("유저상태",currentUser)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path) => {
    navigate(path);
    setIsMenuOpen(false); // 메뉴 선택 후 메뉴 닫기
  };

  const [searchQuery, setSearchQuery] = useState("");
  const onSearch = () => {
  navigate(`/attractions?query=${searchQuery}`);
  setSearchQuery("");
  setIsFocused(false)
  };

  const handleLogout = () => {
     const confirmLogout = window.confirm("로그아웃 하시겠습니까?");
      if (confirmLogout) {
      dispatch(clearUser());
      navigateTo("/");
      
    }
  };

 
  const [isFocused, setIsFocused] = useState(false);

  // useEffect(() => {
  //  console.log("현재 사용자 상태:", currentUser ? "로그인" : "로그아웃");
  // }, [currentUser]); // currentUser를 의존성 배열에 추가하여 상태 변화 감지


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
          <div>
            {currentUser && ( // 로그인 상태일 때만 '마이페이지' 메뉴를 보여줌
            <div className="menu-text" onClick={() => navigateTo("/mypage")}>
            마이페이지
          </div>
        )}
          </div>
        </div>
        
        <div className="search_login">
          {currentUser && (
            <div className="welcom">
              {currentUser.displayName}님, 반가워요!　
            </div>
          )}
          <div className={`searchbox ${isFocused ? 'searchbox-focused' : ''}`}>
            <input className="input"
                  placeholder="검색어를 입력하세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onSearch();
                    }
                  }}
                  onFocus={() => setIsFocused(true)} // 포커스가 되면 상태를 true로 설정
                  onBlur={() => setIsFocused(false)} // 포커스가 해제되면 상태를 false로 설정
            ></input>
          
            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={onSearch} />
          </div>
          <div className="moblieLoginBtn"> {/* 모바일때 메뉴 안보이게 하는 css */}
              {currentUser ? (
              <Button onClick={handleLogout}>로그아웃</Button> // 로그인 상태일 때 로그아웃 버튼 표시
              ) : (
              <Button onClick={() => navigateTo("/signin")}>로그인</Button> // 로그인 상태가 아닐 때 로그인 버튼 표시
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
              {currentUser && ( // 로그인 상태일 때만 '마이페이지' 메뉴를 보여줌
                <p className="mobile-menu-item" onClick={() => navigateTo("/mypage")}>
                  마이페이지
                </p>
              )}
              
              {currentUser && (
                <div className="mobile-menu-item">
                  <hr/>
                  <br/>
                  {currentUser.displayName}님, 반가워요!　
                </div>
              )}

              {currentUser ? (
              <Button onClick={handleLogout}>로그아웃</Button> // handleLogout 함수 호출로 변경
              ) : (
              <Button onClick={() => navigateTo("/signin")}>로그인</Button>
              )}

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