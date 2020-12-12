import React from "react";
import "./topicSubject.css";

export const TopicSubject = ({ topic }) => {
  return <div className="topic--subject--main--container">{topic.topic}</div>;
};
