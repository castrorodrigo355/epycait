import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Calendario } from "../calendario/calendario";
import { Contact } from "../contact/contact";
import { Courses } from "../courses/courses";
import { Home } from "../home/home";
import { SubjectDetail } from "../subjectDetail/subjectDetail";
import { Subjects } from "../subjects/subjects";
import "./main.css";

export const Main = () => {
  return (
    <div className="principal--main--container">
      <Route path="/courses" component={Courses} />
      <Route path="/calendar" component={Calendario} />
      <Route path="/subjectDetail/:id" component={SubjectDetail} />
      <Route path="/subjects" component={Subjects} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Redirect from="*" to="/" />
    </div>
  );
};
