import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./AppLayout.style.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <nav className="app-navbar">
        AppNavBar
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
