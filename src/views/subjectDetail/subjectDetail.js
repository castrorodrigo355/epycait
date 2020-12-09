import React, { useEffect, useState } from "react";
import { subjectList } from "../../constants/subjects";
import { StorySubject } from "../../components/storySubject/storySubject";
import "./subjectDetail.css";

export const SubjectDetail = ({ match }) => {
  const [subject, setSubject] = useState(null);
  const [stories, setStories] = useState(null);

  const findSubjectById = (list, id) => list.find((x) => x.id === parseInt(id));
  const mapInitSubject = (list) => {
    return list.map((element) => {
      return {
        id: element.id,
        image: element.image,
        description: element.description,
      };
    });
  };

  useEffect(() => {
    const id = match.params.id;
    setSubject(findSubjectById(subjectList, id));
    setStories(mapInitSubject(subjectList));
    return () => {
      setSubject(null);
      setStories(null);
    };
  }, []);

  return (
    <div className="subject--detail--main--container">
      {subject && (
        <div className="subject--detail--main--container--stories">
          {stories &&
            stories.map((item, i) => <StorySubject key={i} story={item} />)}
        </div>
      )}
    </div>
  );
};
