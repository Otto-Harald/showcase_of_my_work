import React, { Fragment, useState } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


{/* This is a simple function that creates a date and time picker for the new reservation modal at header,js*/}
function TimePicker() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker style={{ top: 16 }}
                disablePast
                label="Time"
                showTodayButton
            />
        </MuiPickersUtilsProvider>
    );
}

export default TimePicker;
