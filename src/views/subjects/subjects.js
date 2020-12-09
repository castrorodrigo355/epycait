import React from "react";
import { Subject } from "../../components/subject/subject";
import { subjectList } from "../../constants/subjects";
import "./subjects.css";

export const Subjects = () => {
  return (
    <div className="subjects--main--container">
      <div className="subjects--main--container--list">
        {subjectList.map((subject) => (
          <Subject key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};
