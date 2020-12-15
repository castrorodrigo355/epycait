import React, { useState } from "react";
import { BtnConfirmClass } from "../../components/btnConfirmClass/btnConfirmClass";
import { InputText } from "../../components/inputText/inputText";
import "./classCourse.css";

export const ClassCourse = ({ classCourse, confirmClass }) => {
  const [currentClass, setCurrentClass] = useState(classCourse);

  const date = `${currentClass.day}/${currentClass.month}/${currentClass.year}`;

  const onChange = (e) =>
    setCurrentClass({ ...currentClass, [e.target.name]: e.target.value });

  const onClickConfirmClass = () => confirmClass(currentClass);

  return (
    <div className="class--course--main--container">
      <div className="class--course--main--container--header">
        <div className="class--course--main--container--header--date">
          {`Fecha: ${date}`}
        </div>
        <div className="class--course--main--container--header--schedule">
          <InputText
            placeholder="Horario"
            type="text"
            name="schedule"
            value={currentClass.schedule}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="class--course--main--container--class--number">
        {`Clase Nro: ${currentClass.classNumber}`}
      </div>
      <div className="class--course--main--container--topics">
        <InputText
          placeholder="Ingresar Temas"
          type="text"
          name="topics"
          value={currentClass.topics}
          onChange={onChange}
        />
      </div>
      <div className="class--course--main--container--confirm">
        <BtnConfirmClass onClick={onClickConfirmClass}>Ok</BtnConfirmClass>
      </div>
    </div>
  );
};
