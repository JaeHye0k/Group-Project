import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";
import { Wrapper } from "../UserSignUp/styled";
import { Form, Logo } from "../UserSignUp/styled";
import UserTitle from "../components/UserTitle";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../src/redux/user/auth/authSlice";

const UserSignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.currentUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLoading || email === "" || password === "") return;
    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        setUser({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
        })
      );
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("입력하신 정보를 확인하고 다시 시도해 주세요");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Logo onClick={() => navigate("/")}>
        <img src="/img/logo.png" alt="" />
      </Logo>
      <UserTitle title={"로그인"} />
      <Form action="" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          required
        />
        <input
          onChange={onChange}
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          required
        />
        <input
          type="submit"
          value={isLoading ? "로그인중 입니다.." : "로그인"}
        />
      </Form>
      {error && (
        <p style={{ color: "red", marginTop: "1rem", textAlign: "center" }}>
          {error}
        </p>
      )}
      <span>
        계정이 필요하신가요? <Link to="/signup">회원가입</Link>
      </span>
    </Wrapper>
  );
};

export default UserSignIn;
