import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./routeNavbar.css";

export const RouteNavbar = ({ route }) => {
  const history = useHistory();
  const location = useLocation();

  const url = location.pathname;
  const currentPath = url === route.url;

  const clickRoute = () => history.push(route.url);

  return (
    <button
      type="button"
      className={`route--navbar--main--container ${
        currentPath ? "selected--navbar--route" : ""
      }`}
      onClick={clickRoute}
    >
      {route.description}
    </button>
  );
};
