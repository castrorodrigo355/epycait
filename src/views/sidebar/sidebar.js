import React from "react";
import { RouteSidebar } from "../../components/routeSidebar/routeSidebar";
import { iconsBottomBar } from "../../constants/bottomBar";
import "./sidebar.css";

export const Sidebar = ({ openRoutes, clickRouteSidebar, setOpenRoutes }) => {
  const onClickContent = (e) => {
    const id = e.target.id;
    if (id === "sidebar--main--container--content") {
      setOpenRoutes((x) => !x);
    }
  };
  return (
    <div
      className={`sidebar--main--container ${
        openRoutes ? "opened--sidebar" : ""
      }`}
    >
      <div
        className="sidebar--main--container--content"
        id="sidebar--main--container--content"
        onClick={onClickContent}
      >
        <div
          className="sidebar--main--container--content--routes"
          id="sidebar--main--container--content--routes"
        >
          {iconsBottomBar.map((route) => (
            <RouteSidebar
              key={route.id}
              route={route}
              clickRouteSidebar={clickRouteSidebar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
