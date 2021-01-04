import React, { useState } from "react";
import {
  chooseOption,
  getSelectedCriteria,
  parseData,
  radioSeparators,
} from "./readerLibs.js";
import ReactFileReader from "react-file-reader";
import "./App.css";

export const App = () => {
  const [separators, setSeparators] = useState(radioSeparators);
  const [selectedColumns, setSelectedColumns] = useState(null);
  const [selectedLines, setSelectedLines] = useState(null);
  const [file, setFile] = useState(null);
  const [selectedCriteria, setSelectedCriteria] = useState(-1);

  const selectOption = (id) => {
    const list = chooseOption(separators, id);
    setSeparators(list);
    setSelectedCriteria(getSelectedCriteria(list));
  };

  const onChange = (files) => {
    const reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = function (e) {
      const { headerData, arrayData } = parseData(e.target.result);
      setSelectedColumns(headerData);
      setSelectedLines(arrayData);
    };
  };

  return (
    <div className="app--main--container">
      <ReactFileReader fileTypes={[".csv"]} handleFiles={onChange}>
        <button className="btn">Upload</button>
      </ReactFileReader>
      <hr />
      <div className="app--main--container--separators">
        {separators.map((sep) => (
          <Separator key={sep.id} option={sep} selectOption={selectOption} />
        ))}
      </div>
      <hr />
      <div className="app--main--container--preview">
        <table>
          <thead>
            <tr className="app--main--container--preview--header">
              {selectedColumns &&
                selectedColumns.map((x, i) => {
                  return (
                    <th
                      className="app--main--container--preview--header--column"
                      key={i}
                    >
                      {x.field}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {selectedLines &&
              selectedLines.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>{x.field}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$80</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Sum</td>
            <td>$180</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const Separator = ({ option, selectOption }) => {
  const selected = option.selected;
  const clickRadio = () => !selected && selectOption(option.id);

  return (
    <div className="separator--main--container">
      <div className="separator--main--container--description">
        {option.description}
      </div>
      <div
        className={`separator--main--container--radio ${
          selected ? "radio--selected" : ""
        }`}
        onClick={clickRadio}
      />
    </div>
  );
};
