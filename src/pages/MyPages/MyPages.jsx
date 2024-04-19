import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import "./style/MyPages.style.css";

const MyPages = () => {
  const user = useSelector((state) => state.auth.currentUser);
  console.log(user);

  const logOut = () => {
    auth.signOut();
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="my-content">
          <div className="black-box items">
            <div className="my-title">
              <figure>
                <img src="/images/ico/ico-user.png" alt="기본프로필이미지" />
              </figure>
              <em></em>
            </div>
            <div className="my-txt">
              <span>반가워요</span>
              <strong>{user && user.displayName} 님</strong>
            </div>
          </div>

          <div className="white-box items">
            <div className="title">
              <h2>마이페이지</h2>
            </div>

            <div className="info">
              <strong className="sub-title">기본정보</strong>

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
                <input type="password" placeholder="*******" />
              </div>
              <div className="input-box">
                <input type="submit" value="수정하기" />
              </div>
            </div>

            <div className="bookmark">
              <strong className="sub-title">즐겨찾기</strong>

              <div className="content">
                <div className="favorite-box">
                  <figure>
                    <img
                      src="/images/ico/ico-like.png"
                      alt="컨텐츠하트아이콘"
                    />
                  </figure>
                  <span>컨텐츠하트</span>
                </div>
                <div className="favorite-box">
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
              <strong className="sub-title">최근 본 컨텐츠</strong>

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
          </div>
        </div>
      </div>
    </div>
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

export default MyPages;
