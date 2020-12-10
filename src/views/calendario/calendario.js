import React, { useState } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { MONTHS, WEEKDAYS_SHORT } from "../../libs/calendar/calendar";
import "./calendario.css";

const birthdayStyle = `.DayPicker-Day--highlighted {
  background-color: #4AC1CF;
  color: white;
}`;

const modifiersStyles = {
  clasesCurso: {
    color: "#4AC1CF",
    backgroundColor: "#4AC1CF",
  },
  fechaActual: {
    color: "red",
    backgroundColor: "black",
  },
};

const modifiers = {
  clasesCurso: modifiersStyles.clasesCurso,
  fechaActual: new Date(),
};

export const Calendario = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const clickDay = (day) => setSelectedDays([...selectedDays, day]);

  return (
    <div className="calendar--main--container">
      <div className="calendar--main--container--picker">
        <style>{birthdayStyle}</style>
        <DayPicker
          disabledDays={{ daysOfWeek: [0] }}
          months={MONTHS}
          weekdaysShort={WEEKDAYS_SHORT}
          onDayClick={clickDay}
          selectedDays={selectedDays}
          modifiers={modifiers}
          modifiersStyles={modifiersStyles}
          month={new Date(2020, 11)}
        />
      </div>
    </div>
  );
};
