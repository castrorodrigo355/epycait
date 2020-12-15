import React, { useState, useEffect } from "react";
import { Main } from "./views/main/main";
import { Navbar } from "./views/navbar/navbar";
import { Sidebar } from "./views/sidebar/sidebar";
import { BottomBar } from "./views/bottomBar/bottomBar";
import { SocialNets } from "./views/socialNets/socialNets";
import { setAvailableArea } from "./libs/app/app";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

export const App = () => {
  useEffect(() => {
    localStorage.removeItem("courseClasses");
    setAvailableArea();
    window.addEventListener("resize", setAvailableArea);
    return () => window.removeEventListener("resize", setAvailableArea);
  }, []);

  const [openRoutes, setOpenRoutes] = useState(false);
  const [openSocialNets, setOpenSocialNets] = useState(false);

  const clickRoutes = () => setOpenRoutes((x) => !x);
  const openIconOptions = () => setOpenSocialNets((x) => !x);

  const clickRouteSidebar = () => setOpenRoutes((x) => !x);

  return (
    <div className="app--main--container">
      <Router>
        <Navbar openRoutes={openRoutes} clickRoutes={clickRoutes} />
        <Sidebar
          openRoutes={openRoutes}
          clickRoutes={clickRoutes}
          clickRouteSidebar={clickRouteSidebar}
          setOpenRoutes={setOpenRoutes}
        />
        <div>
          <Switch>
            <Main />
          </Switch>
        </div>
        <SocialNets
          openSocialNets={openSocialNets}
          openIconOptions={openIconOptions}
        />
        <BottomBar clickRouteSidebar={() => setOpenRoutes(false)} />
      </Router>
    </div>
  );
};
