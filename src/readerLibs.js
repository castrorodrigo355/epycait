export const radioSeparators = [
  { id: 0, criteria: ",", description: "Coma", selected: false },
  { id: 1, criteria: ".", description: "Espacio", selected: false },
  { id: 2, criteria: ";", description: "Punto y coma", selected: false },
  { id: 3, criteria: "tab", description: "Tabulador", selected: false },
];

// Option separation for each line
const createHeaderData = (lineData) => {
  const list = lineData.split(",");
  const arrayList = list.map((x) => {
    return {
      field: x,
    };
  });
  return arrayList;
};

const createLineData = (lineData) => {
  const list = lineData.split(",");
  console.log("ELEMENTO: ", list);
};

export const parseData = (data) => {
  let headerData;
  let arrayData;
  const linesFile = data.split("\n");
  linesFile.forEach((lineData, i) => {
    if (i === 0) {
      headerData = createHeaderData(lineData);
    } else {
      arrayData = createLineData(lineData);
    }
  });
  return { headerData, arrayData };
};

export const chooseOption = (separators, id) => {
  return separators.map((x) => {
    if (x.id === id) {
      return {
        ...x,
        selected: true,
      };
    } else {
      return {
        ...x,
        selected: false,
      };
    }
  });
};

export const getSelectedCriteria = (list) => {
  const option = list.find((x) => x.selected);
  return option.criteria;
};
