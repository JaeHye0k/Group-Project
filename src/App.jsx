import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AppLayout from "./layout/AppLayout/AppLayout";
import TravelMap from "./pages/TravelMap/TravelMap";

// 홈페이지 = /
// 여행 지도 페이지 = /map

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/map" element={<TravelMap />} />
      </Route>
    </Routes>
  );
}

export default App;
