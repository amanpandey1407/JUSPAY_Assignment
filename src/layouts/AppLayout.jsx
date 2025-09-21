import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Notifications from "../components/Notifications/Notifications";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";

const AppLayout = () => {
  const isNavOpen = useSelector((state) => state.ui.isNavOpen);
  const isNotificationsOpen = useSelector(
    (state) => state.ui.isNotificationsOpen
  );

  let gridClass = "";
  if (isNavOpen && isNotificationsOpen) {
    gridClass = "both-open";
  } else if (isNavOpen) {
    gridClass = "nav-only-open";
  } else if (isNotificationsOpen) {
    gridClass = "notifications-only-open";
  } else {
    gridClass = "none-open";
  }

  return (
    <div className={`app-layout ${gridClass}`}>
      {isNavOpen ? <Navigation /> : null}

      <div className="main-section">
        <Header />
        <div className="content-area">
          <Outlet />
        </div>
      </div>

      {isNotificationsOpen ? <Notifications /> : null}
    </div>
  );
};

export default AppLayout;
