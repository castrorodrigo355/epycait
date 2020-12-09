import React from "react";
import { useHistory } from "react-router-dom";
import "./routeSidebar.css";

export const RouteSidebar = ({ route, clickRouteSidebar }) => {
  const history = useHistory();

  const clickRoute = (url) => {
    clickRouteSidebar();
    history.push(url);
  };

  return (
    <div
      className="route--sidebar--main--container"
      onClick={() => clickRoute(route.url)}
    >
      <route.icon className="route--sidebar--main--container--icon" />
      <div className="route--sidebar--main--container--description">
        {route.description}
      </div>
    </div>
  );
};
