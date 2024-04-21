// MyPage.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, storage } from "../../../firebase";
import { getAuth, signOut } from "firebase/auth";
import { ref, getDownloadURL } from "firebase/storage";
import "./style/MyPages.style.css";
import { Container, Content, Items, SubTitle, Wrapper } from "./styled";
import { clearUser } from "../../../redux/user/auth/authSlice";
import PasswordChangeForm from "./PasswordChangeForm";
import ProfileImageUpdater from "./ProfileImageUpdater";
import ProfileImageManager from "./ProfileImageManager";

const MyPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const [showPopup, setShowPopup] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState(null); // 이 줄만 남기고 아래 중복 선언 부분은 제거

  useEffect(() => {
    if (user) {
      const storedImageData = localStorage.getItem("imageData");
      if (storedImageData) {
        const parsedImageData = JSON.parse(storedImageData);
        const userImageData = parsedImageData.find(
          (data) => data.email === user.email
        );
        if (userImageData) {
          setProfileImageUrl(userImageData.imageUrl);
        }
      }
    }
  }, [user]);

  useEffect(() => {
    if (profileImageUrl && user) {
      const storedImageData = localStorage.getItem("imageData") || "[]";
      const parsedImageData = JSON.parse(storedImageData);
      const updatedImageData = parsedImageData.filter(
        (data) => data.email !== user.email
      );
      updatedImageData.push({ email: user.email, imageUrl: profileImageUrl });
      localStorage.setItem("imageData", JSON.stringify(updatedImageData));
    }
  }, [profileImageUrl, user]);

  const logOut = () => {
    dispatch(clearUser());
    localStorage.removeItem("profileImage");
    localStorage.removeItem("profileImageEmail");
    setProfileImageUrl(""); // 프로필 이미지 상태 초기화
    auth.signOut().then(() => {
      navigate("/");
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
                {profileImageUrl ? (
                  <img src={profileImageUrl} alt="프로필 이미지" />
                ) : (
                  <img src="/images/ico/ico-user.png" alt="기본프로필이미지" />
                )}
                <em></em>
              </figure>
            </div>
            {showPopup && (
              <div className="popup">
                <ProfileImageUpdater
                  user={user}
                  setProfileImageUrl={setProfileImageUrl}
                  togglePopup={togglePopup}
                />
              </div>
            )}
            <ProfileImageManager
              user={user}
              profileImageUrl={profileImageUrl}
              setProfileImageUrl={setProfileImageUrl}
            />
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
