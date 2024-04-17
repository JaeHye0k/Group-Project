import React from "react";
import "./LoginPage.style.css";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
  };

  const onChange = (e) => {
    // 입력 필드 변경 처리 로직 추가
  };

  return (
    <div className="login-page">
      <h3 className="homepage-title">홈페이지 이름 / 로고</h3>
      <div className="login-container">
        <div className="login-title">Login</div>
        <div className="title-underline"></div>
        <form onSubmit={onSubmit} className="login-form">
          <div className="form-group">
            <input
              onChange={onChange}
              type="email"
              name="email"
              className="form-control"
              placeholder="아이디를 입력해 주세요."
              required
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="비밀번호 입력해 주세요."
              required
            />
          </div>
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
        <div className="find-links">
          <a href="/find-id">아이디찾기</a>
          <span className="separator">|</span>
          <a href="/find-password">비밀번호 찾기</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
