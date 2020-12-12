import React from "react";
import homeBackground from "../../icons/background/home--background.jpg";
import { GiSpellBook } from "react-icons/gi";
import { GiSecretBook } from "react-icons/gi";
import { subjectsHome } from "../../libs/home/home";
import "./home.css";

export const Home = () => {
  return (
    <div className="home--main--container">
      <div className="home--main--container--background">
        <img src={homeBackground} alt="..." />
        <div className="home--main--container--background--mask">
          <GiSecretBook className="home--main--container--background--mask--image" />
        </div>
      </div>
      <div className="home--main--container--title">Cursos Intensivos</div>
      <div className="home--main--container--description">
        Intensivo Verano - Cuatrimestral
      </div>
      <div className="home--main--container--subjects">
        {subjectsHome.map((x, i) => (
          <div key={i}>{x}</div>
        ))}
      </div>
      <div className="home--main--container--book">
        <GiSpellBook className="home--main--container--book--icon" />
      </div>
    </div>
  );
};
