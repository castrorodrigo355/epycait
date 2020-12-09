import React from "react";
import "./routeNavbar.css";

export const RouteNavbar = ({ route }) => {
  const clickRoute = () => {};

  return (
    <div className="route--navbar--main--container" onClick={clickRoute}>
      {route.description}
    </div>
  );
};
