import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { iconsBottomBar } from "../../constants/bottomBar";
import "./bottomBar.css";

export const BottomBar = ({ clickRouteSidebar }) => {
  const history = useHistory();

  const clickRoute = (url) => {
    history.push(url);
    clickRouteSidebar();
  };

  return (
    <div className="bottom--bar--main--container">
      <div className="bottom--bar--main--container--items">
        {iconsBottomBar.map((x, i) => (
          <IconBottomBar key={i} route={x} clickRoute={clickRoute} />
        ))}
      </div>
    </div>
  );
};

const IconBottomBar = ({ route, clickRoute }) => {
  const location = useLocation();
  const url = location.pathname;
  return (
    <div
      className={`bottom--bar--main--container--items--item ${
        url === route.url ? "selected--item" : ""
      }`}
      onClick={() => clickRoute(route.url)}
    >
      <route.icon className="bottom--bar--main--container--items--item--icon" />
      <div className={`bottom--bar--main--container--items--item--description`}>
        {route.description}
      </div>
    </div>
  );
};
