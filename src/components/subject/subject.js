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
        <div
          className="subject--main--container--details"
          // onClick={() => history.push(`/subjectDetail/${subject.id}`)}
        >
          {/* {details.map((detail) => (
            <Detail key={detail.id} detail={detail} />
          ))} */}
          {`Ver detalle de ${subject.description}`}
        </div>
      )}
      {/* ************************************************ */}
      <div
        className="subject--main--container--see--more"
        //   onClick={clickEnlarge}
        // onClick={() => {
        //   setTimeout(() => history.push(`/subjectDetail/${subject.id}`), 500);
        // }}
        // >
        //   {enlarged ? "Reducir" : "Ampliar"}
      >
        <ButtonDetail
          onClick={() => {
            setTimeout(() => history.push(`/subjectDetail/${subject.id}`), 400);
          }}
        >
          Ver detalle
        </ButtonDetail>
      </div>
    </div>
  );
};

const Detail = ({ detail }) => {
  return <div className="detail--main--container">{detail.topic}</div>;
};

const ButtonDetail = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="button--detail--main--container"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
