// PasswordChangeForm.js
import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const PasswordChangeForm = ({ user }) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, user.email, password);
      setIsPasswordCorrect(true);
      setPassword("");
    } catch (error) {
      alert("올바른 암호가 아닙니다.");
      setPassword("");
    }
  };

  const handleSubmitNewPassword = async (e) => {
    e.preventDefault();
    if (newPassword === confirmNewPassword) {
      try {
        await updatePassword(auth.currentUser, newPassword);
        alert("암호가 변경되었습니다. 다시 로그인해주세요.");
        await auth.signOut();
        navigate("/signin");
      } catch (error) {
        alert("암호 변경에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      alert("암호가 일치하지 않습니다.");
      setNewPassword("");
      setConfirmNewPassword("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="password"
            placeholder="암호를 입력하세요"
            onChange={handlePasswordChange}
            value={password}
            disabled={isPasswordCorrect}
          />
        </div>
        {!isPasswordCorrect && (
          <div className="input-box">
            <input type="submit" value="수정하기" />
          </div>
        )}
      </form>
      {isPasswordCorrect && (
        <form onSubmit={handleSubmitNewPassword}>
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
            <input type="submit" value="수정하기" />
          </div>
        </form>
      )}
    </>
  );
};

export default PasswordChangeForm;
