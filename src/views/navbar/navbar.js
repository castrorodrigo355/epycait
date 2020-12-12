import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { RouteNavbar } from "../../components/routeNavbar/routeNavbar";
import { routes } from "../../constants/navbar";
import "./navbar.css";

export const Navbar = ({ openRoutes, clickRoutes }) => {
  return (
    <div className="navbar--main--container">
      <div
        className={`navbar--main--container--routes ${
          openRoutes ? "opened--routes" : ""
        }`}
      >
        {routes.map((route) => (
          <RouteNavbar key={route.id} route={route} />
        ))}
      </div>
      <div className="navbar--main--container--hamburger">
        {openRoutes ? (
          <GiCancel
            className="navbar--main--container--hamburger--icon"
            onClick={clickRoutes}
          />
        ) : (
          <GiHamburgerMenu
            className="navbar--main--container--hamburger--icon"
            onClick={clickRoutes}
          />
        )}
      </div>
      <div
        className={`navbar--main--container--title ${
          openRoutes ? "title--move" : ""
        }`}
      >
        RODRI CLASS
      </div>
    </div>
  );
};
