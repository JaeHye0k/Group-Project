import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import "./style/MyPages.style.css";
import { Container, Content, Items, SubTitle, Wrapper } from "./styled";

const MyPage = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.currentUser);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const logOut = () => {
    auth.signOut();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

   const handleEdit = () => {
     signInWithEmailAndPassword(auth, user.email, password)
       .then(() => {
         // 올바른 암호를 입력한 경우
         setIsPasswordCorrect(true);
         setPassword("");
       })
       .catch((error) => {
         alert("올바른 암호가 아닙니다.");
         setPassword("");
       });
   };

    const handleSubmitNewPassword = async () => {
      if (newPassword === confirmNewPassword) {
        try {
          // 새 암호로 업데이트를 시도합니다.
          await updatePassword(auth.currentUser, newPassword);
          alert("암호가 변경되었습니다. 다시 로그인해주세요.");
          // 업데이트 성공 후 로그아웃을 진행합니다.
          await signOut(auth);
          navigate("/signin"); // 사용자를 로그인 페이지로 리다이렉트합니다.
        } catch (error) {
          // 암호 업데이트 과정에서 오류가 발생한 경우
          alert("암호 변경에 실패했습니다. 다시 시도해주세요.");
        }
      } else {
        // 입력한 두 암호가 일치하지 않는 경우
        alert("암호가 일치하지 않습니다.");
        setNewPassword("");
        setConfirmNewPassword("");
      }
    };


  
  return (
    <Container>
      <Wrapper>
        <Content>
          <Items className="left">
            <div className="l-title">
              <figure>
                <img src="/images/ico/ico-user.png" alt="기본프로필이미지" />
              </figure>
              <em></em>
            </div>
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
              <div className="input-box">
                <input
                  type="password"
                  placeholder="암호를 입력하세요"
                  onChange={handlePasswordChange}
                  value={password}
                  disabled={isPasswordCorrect}
                />
              </div>
              {isPasswordCorrect && (
                <>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="새로운 암호를 입력하세요"
                      onChange={handleNewPasswordChange}
                      value={newPassword}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="동일한 암호를 입력하세요"
                      onChange={handleConfirmNewPasswordChange}
                      value={confirmNewPassword}
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="submit"
                      value="수정하기"
                      onClick={handleSubmitNewPassword}
                    />
                  </div>
                </>
              )}
              {!isPasswordCorrect && (
                <div className="input-box">
                  <input type="submit" value="수정하기" onClick={handleEdit} />
                </div>
              )}
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
    // <div>
    //   {user ? (
    //     <div>
    //       <p>{user.displayName} 님</p>
    //       <button onClick={logOut}>로그아웃</button>
    //     </div>
    //   ) : (
    //     <button>로그인</button>
    //   )}
    // </div>
  );
};

export default MyPage;
