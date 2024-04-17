import React from "react";
import { Outlet } from "react-router-dom";
import './AppLayout.style.css'

const AppLayout = () => {
  return (
    <div >
      <div className="navbar">
          <div>전국팔도</div>
          <div>me1</div>
          <div>me2</div>
          <input placeholder="검색"></input>
          <button>검색</button>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
