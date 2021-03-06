import React, { useState } from "react";
import { ClassCourse } from "../../components/classCourse/classCourse";
import { CustomCalendar } from "../../components/customCalendar/customCalendar";
import { sortByDateAsc } from "../../libs/calendar/calendar";
import "./calendario.css";

export const Calendario = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [courseClasses, setCourseClasses] = useState([]);
  const [openModalDates, setOpenModalDates] = useState(false);

  const clickDay = (day) => setSelectedDays([...selectedDays, day]);

  const showSelectedDates = () => {
    setOpenModalDates((x) => !x);
    setCourseClasses(sortByDateAsc(selectedDays));
  };

  const confirmClass = (myClass) => {
    let newCourseClasses = courseClasses;
    const classNumber = myClass.classNumber;
    newCourseClasses[classNumber - 1] = myClass;
    localStorage.setItem("courseClasses", JSON.stringify(newCourseClasses));
    setCourseClasses(newCourseClasses);
  };

  return (
    <div className="calendar--main--container">
      <div className="calendar--main--container--picker">
        <CustomCalendar clickDay={clickDay} selectedDays={selectedDays} />
      </div>
      <div className="calendar--main--container--create">
        <button type="button" onClick={showSelectedDates}>
          {"R"}
        </button>
      </div>
      <div
        className={`calendar--main--container--modal ${
          openModalDates ? "open--modal--dates" : ""
        }`}
      >
        <div className="calendar--main--container--modal--content">
          <div className="calendar--main--container--modal--content--panel">
            {courseClasses.map((x) => (
              <ClassCourse
                key={x.classNumber}
                classCourse={x}
                confirmClass={confirmClass}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/*
Buenas. Como siempre en el verano Análisis 1, Física 1, 
Análisis 2, Física 2. Interesad@s en rendir parcial/ Final 
8/9 clases, modalidad de 2/3 veces x semana como 
Estos dias mando nuevo sitio web con calendario de fechas para cada materia.
Cursos de Enero y Febrero. CEL: 115 948 4443
 */
