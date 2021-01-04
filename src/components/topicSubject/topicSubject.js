import React from "react";
import { GiClick } from "react-icons/gi";
import "./topicSubject.css";

export const TopicSubject = ({ topic }) => {
  const clickTopic = () => console.log(topic);

  return (
    <div className="topic--subject--main--container">
      <div className="topic--subject--main--container--name">{topic.topic}</div>
      <div className="topic--subject--main--container--icon">
        <GiClick onClick={clickTopic} />
      </div>
    </div>
  );
};
