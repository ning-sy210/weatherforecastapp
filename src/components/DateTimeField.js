import React from "react";

import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { ACTIONS } from "../App";

const DateTimeField = ({ date, time, dispatch }) => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Date"
          inputFormat="yyyy-MM-DD"
          value={date}
          onChange={(newDate) =>
            dispatch({ type: ACTIONS.SET_DATE, payload: { date: newDate } })
          }
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={time}
          onChange={(newTime) =>
            dispatch({ type: ACTIONS.SET_TIME, payload: { time: newTime } })
          }
          renderInput={(params) => <TextField {...params} />}
          closeOnSelect={false}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateTimeField;
