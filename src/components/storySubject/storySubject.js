import React from "react";
import { useHistory } from "react-router-dom";
import "./storySubject.css";

export const StorySubject = ({ story }) => {
  const history = useHistory();
  return (
    <div
      className="story--subject--main--container"
      onClick={() => history.push(`/subjectDetail/${story.id}`)}
    >
      <div className="story--subject--main--container--image">
        <img src={story.image} alt="..." />
      </div>
      <div className="story--subject--main--container--description">
        {story.description}
      </div>
    </div>
  );
};
