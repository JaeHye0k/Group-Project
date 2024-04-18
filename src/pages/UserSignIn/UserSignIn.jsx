import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
const UserSignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    if (email === "" || password === "") return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {}
  };
  return (
    <div className="wrap">
      <form action="" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          onChange={onChange}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserSignIn;
