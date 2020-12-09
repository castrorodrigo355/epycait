import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./subject.css";

export const Subject = ({ subject }) => {
  const history = useHistory();
  const [enlarged, setEnlarged] = useState(false);
  const clickEnlarge = () => setEnlarged((x) => !x);

  const details = subject.details;

  return (
    <div className="subject--main--container">
      {/* ************************************************ */}
      <div
        className={`subject--main--container--header ${
          enlarged ? "enlarged--info" : ""
        }`}
        onClick={() => history.push(`/subjectDetail/${subject.id}`)}
      >
        <img src={subject.image} alt="..." />
      </div>
      {/* ************************************************ */}
      <div
        className={`subject--main--container--data ${
          enlarged ? "data--separated" : ""
        }`}
      >
        <div className="subject--main--container--data--name">
          {`${subject.description}`}
        </div>
        <div className="subject--main--container--data--classes">
          {`(${subject.countClasses} Clases)`}
        </div>
      </div>
      {/* ************************************************ */}
      {enlarged && (
        <div className="subject--main--container--details">
          {details.map((detail) => (
            <Detail key={detail.id} detail={detail} />
          ))}
        </div>
      )}
      {/* ************************************************ */}
      <div
        className="subject--main--container--see--more"
        onClick={clickEnlarge}
      >
        {enlarged ? "Reducir" : "Ampliar"}
      </div>
    </div>
  );
};

const Detail = ({ detail }) => {
  return <div className="detail--main--container">{detail.topic}</div>;
};
