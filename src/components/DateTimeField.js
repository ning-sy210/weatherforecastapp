import React from "react";
import { useState } from "react";

import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";

const DateTimeField = () => {
  var currDateTime = new Date();
  const [selectedDate, setSelectedDate] = useState(currDateTime);
  const [selectedTime, setSelectedTime] = useState(currDateTime);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Date"
          inputFormat="DD/MM/yyyy"
          value={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Time"
          value={selectedTime}
          onChange={(time) => setSelectedTime(time)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateTimeField;
