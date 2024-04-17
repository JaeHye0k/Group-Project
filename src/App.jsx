import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./layout/AppLayout/AppLayout";
import TravelMapPage from "./pages/TravelMapPage/TravelMapPage";
import AttractionsPage from "./pages/AttractionsPage/AttractionsPage";
import AttractionsDetailPage from "./pages/AttractionDetailPage/AttractionsDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// 홈페이지 = /
// 여행 지도 페이지 = /map
// 관광지 모음 페이지 = /attractions
// 관광지 디테일 페이지 = /attractions/:id

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/map" element={<TravelMapPage />} />
        <Route path="/attractions">
          <Route index element={<AttractionsPage />} />
          <Route path=":id" element={<AttractionsDetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
