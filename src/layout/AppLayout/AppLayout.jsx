import React from "react";
import { Outlet } from "react-router-dom";
import "./AppLayout.style.css";

const AppLayout = () => {
  return (
    <div id="app-layout">
      AppNavBar
      <Outlet />
    </div>
  );
};

export default AppLayout;
