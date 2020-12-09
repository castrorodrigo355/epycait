import React from "react";
import addition from "../../icons/socialNets/addition.jpeg";
import { socialNetsList } from "../../constants/socialNets";
import "./socialNets.css";

export const SocialNets = ({ openSocialNets, openIconOptions }) => {
  return (
    <div
      className={`social--nets--main--container ${
        openSocialNets ? "opened--social--nets" : ""
      }`}
    >
      <div className="social--nets--main--container--button">
        <img
          className={`social--nets--main--container--button--img ${
            openSocialNets ? "button--add--turned" : ""
          }`}
          src={addition}
          alt="..."
          onClick={openIconOptions}
        />
      </div>
      <div className="social--nets--main--container--icons">
        {socialNetsList.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => console.log(item)}
              className="social--nets--main--container--icons--item"
            >
              <img src={item.icon} alt="..." />
            </div>
          );
        })}
      </div>
    </div>
  );
};
