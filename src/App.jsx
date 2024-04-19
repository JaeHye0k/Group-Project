import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./layout/AppLayout/AppLayout";
import TravelMapPage from "./pages/TravelMapPage/TravelMapPage";
import AttractionsPage from "./pages/AttractionsPage/AttractionsPage";
import AttractionsDetailPage from "./pages/AttractionDetailPage/AttractionsDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase";
import { setUser, clearUser } from "./redux/user/auth/authSlice";

import BookmarkedPlaces from "./pages/OST/BookmarkedPlaces/BookmarkedPlaces";

// signUp, In
import UserSignUp from "./pages/User/UserSignUp/UserSignUp";
import UserSignIn from "./pages/User/UserSignIn/UserSignIn";

// Mypage
import MyPage from "./pages/User/MyPage/MyPage";
import UserLikes from "./pages/User/UserLikes/UserLikes";

// 홈페이지 = /
// 여행 지도 페이지 = /map
// 관광지 모음 페이지 = /attractions
// 관광지 디테일 페이지 = /attractions/:id

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/map" element={<TravelMapPage />} />
        <Route path="/attractions">
          <Route index element={<AttractionsPage />} />
          <Route path=":id" element={<AttractionsDetailPage />} />
        </Route>

        {/* user */}
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/signin" element={<UserSignIn />} />

        {/* mypage */}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/likes" element={<UserLikes />} />

        <Route path="ost-bookmarkedplaces" element={<BookmarkedPlaces />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
