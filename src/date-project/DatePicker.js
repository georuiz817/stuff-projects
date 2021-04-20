import React, { useState, useEffect } from "react";
import DateWidget from "./DateWidget.js";

export default function DatePicker() {
  const [day, setDay] = useState(1);
  const [year, setYear] = useState(2021);
  const [allMonths, setAllMonth] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  const [month, setMonth] = useState("");

  //once the array is loaded in set month to jan
  useEffect(() => {
    if (allMonths) {
      setMonth(allMonths[0]);
    }
  }, [allMonths]);

  //will run on focus of the input
  let showDateWidget = () => {
    document.getElementById("date-widge").style.display = "grid";
  };

  return (
    <div className="datePickerBody">
      <p className="date-label">Date of Birth</p>
      <input
        id="input1"
        className="date-input-field"
        value={`${month} ${day}, ${year}`}
        readOnly={true}
        type="text"
        onFocus={() => {
          showDateWidget();
        }}
      />
      <DateWidget
        day={day}
        setDay={setDay}
        month={month}
        setMonth={setMonth}
        allMonths={allMonths}
        year={year}
        setYear={setYear}
      />
    </div>
  );
}
