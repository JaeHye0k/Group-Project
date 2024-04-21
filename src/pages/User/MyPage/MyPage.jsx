// MyPage.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { getAuth, signOut } from "firebase/auth";
import "./style/MyPages.style.css";
import { Container, Content, Items, SubTitle, Wrapper } from "./styled";
import { clearUser } from "../../../redux/user/auth/authSlice";
import PasswordChangeForm from "./PasswordChangeForm";
import ProfileImageUpdater from "./ProfileImageUpdater";

const MyPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const [showPopup, setShowPopup] = useState(false);

  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(clearUser());
    });
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Container>
      <Wrapper>
        <Content>
          <Items className="left">
            <div className="l-title" onClick={togglePopup}>
              <figure>
                <img src="/images/ico/ico-user.png" alt="기본프로필이미지" />
                <em></em>
              </figure>
            </div>
            {showPopup && (
              <div className="popup">
                <ProfileImageUpdater />
              </div>
            )}
            <div className="l-txt">
              <span>반가워요</span>
              <strong>{user && user.displayName} 님</strong>
              <h2 styled={{ cursor: "point" }} onClick={logOut}>
                로그아웃
              </h2>
            </div>
          </Items>

          <Items className="right">
            <div className="title">
              <h2>마이페이지</h2>
            </div>

            <div className="info">
              <SubTitle>기본정보</SubTitle>

              <div className="input-box">
                <input
                  type="text"
                  placeholder={user && user.displayName}
                  disabled
                />
              </div>
              <div className="input-box">
                <input type="email" placeholder={user && user.email} disabled />
              </div>
              <PasswordChangeForm user={user} />
            </div>

            <div className="bookmark">
              <SubTitle>즐겨찾기</SubTitle>

              <div className="content">
                <div
                  className="favorite-box"
                  onClick={() => navigate("/likes")}
                >
                  <figure>
                    <img
                      src="/images/ico/ico-like.png"
                      alt="컨텐츠하트아이콘"
                    />
                  </figure>
                  <span>컨텐츠하트</span>
                </div>
                <div
                  className="favorite-box"
                  onClick={() => navigate("/books")}
                >
                  <figure>
                    <img
                      src="/images/ico/ico-bookmark.png"
                      alt="북마크아이콘"
                    />
                  </figure>
                  <span>지도북마크</span>
                </div>
              </div>
            </div>

            <div className="recent">
              <SubTitle>최근 본 컨텐츠</SubTitle>

              <div className="content">
                <div className="recent-item">
                  <figure>
                    <img src="" alt="" />
                  </figure>
                  <div className="txt">
                    <strong>오래된 나무</strong>
                    <p>
                      충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도
                      어쩌구충청남도 어쩌구충청남도 어쩌구
                    </p>
                  </div>
                </div>
                <div className="recent-item">
                  <figure>
                    <img src="" alt="" />
                  </figure>
                  <div className="txt">
                    <strong>오래된 나무</strong>
                    <p>
                      충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도
                      어쩌구충청남도 어쩌구충청남도 어쩌구
                    </p>
                  </div>
                </div>
                <div className="recent-item">
                  <figure>
                    <img src="" alt="" />
                  </figure>
                  <div className="txt">
                    <strong>오래된 나무</strong>
                    <p>
                      충청남도 어쩌구충청남도 어쩌구충청남도 어쩌구충청남도
                      어쩌구충청남도 어쩌구충청남도 어쩌구
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Items>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default MyPage;
