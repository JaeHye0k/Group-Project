import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";

const MyPages = () => {
  const user = useSelector((state) => state.auth.currentUser);
  console.log(user);
  const logOut = () => {
    auth.signOut();
  };
  return (
    <div>
      {user ? (
        <div>
          <p>{user.displayName} 님</p>
          <button onClick={logOut}>로그아웃</button>
        </div>
      ) : (
        <button>로그인</button>
      )}
    </div>
  );
};

export default MyPages;
