import React, { useEffect, useState } from "react";
import { subjectList } from "../../constants/subjects";
import { StorySubject } from "../../components/storySubject/storySubject";
import { TopicSubject } from "../../components/topicSubject/topicSubject";
import "./subjectDetail.css";

export const SubjectDetail = ({ match }) => {
  const [selectedId, setSelectedId] = useState(null);
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

  const chooseDetailSubject = (id) => setSelectedId(id);

  useEffect(() => {
    setSubject(findSubjectById(subjectList, selectedId));
  }, [selectedId]);

  useEffect(() => {
    const id = match.params.id;
    console.log("ID: ", id);
    setSelectedId(id);
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
          {stories.map((item, i) => (
            <StorySubject
              key={i}
              story={item}
              chooseDetailSubject={chooseDetailSubject}
            />
          ))}
        </div>
      )}
      {subject && (
        <div className="subject--detail--main--container--subject">
          {subject.description}
        </div>
      )}
      {subject && (
        <div className="subject--detail--main--container--topics">
          {subject.details.map((topic, i) => (
            <TopicSubject key={i} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
};
