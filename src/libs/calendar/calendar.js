export const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const WEEKDAYS_SHORT = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];

const createDate = (date, i) => {
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    classNumber: i + 1,
    schedule: "... Hrs",
    topics: "",
  };
};
export const sortByDateAsc = (list) => {
  const newList = list.sort((a, b) => a - b);
  const dateList = newList.map((date, i) => createDate(date, i));
  console.log(dateList);
  return dateList;
};
