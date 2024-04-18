import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
const UserSignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") return;

    try {
      const create = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(create.user, {
        displayName: name,
      });
      navigate("/");
      console.log(create.user);
    } catch (e) {}
  };
  return (
    <div className="wrap">
      <form action="" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="name"
          placeholder="name"
          required
        />
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

export default UserSignUp;
