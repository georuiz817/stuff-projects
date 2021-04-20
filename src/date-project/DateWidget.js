import React from "react";
import { setDayToOne } from "./DatePickerFunctions";
import { setDayNotPastMax } from "./DatePickerFunctions";
import { addMonthUp } from "./DatePickerFunctions";
import { addMonthDown } from './DatePickerFunctions'
export default function DateWidget({
  day,
  setDay,
  month,
  setMonth,
  year,
  setYear,
  allMonths,
}) {
  return (
    <div id="date-widge" className="date-widget">
      <div>
        <div
          onClick={() => {
            addMonthUp(allMonths, month, setMonth);
          }}
          className="arrow"
        >
          ^
        </div>
        <div className="day-input">{month}</div>
        <div
          onClick={() => {
            addMonthDown(allMonths, month, setMonth);
          }}
          className="arrow"
        >
          v
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            setDayNotPastMax(day, setDay);
          }}
          className="arrow"
        >
          ^
        </div>
        <input
          pattern="[0-9]{10}"
          min="1"
          max="31"
          type="number"
          onChange={(e) => setDay(parseInt(e.target.value))}
          className="day-input"
          value={day}
        />
        <div
          onClick={() => {
            setDayToOne(day, setDay);
          }}
          className="arrow"
        >
          v
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            setYear(year + 1);
          }}
          className="arrow"
        >
          ^
        </div>
        <div>
          <input
            type="number"
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="day-input"
            value={year}
          />
        </div>
        <div
          onClick={() => {
            setYear(year - 1);
          }}
          className="arrow"
        >
          v
        </div>
      </div>
    </div>
  );
}
