import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import "./Calendarpage.css"; // Optional for custom styling

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
        console.log("Selected Date:", newDate);
    };

    return (
        <div className="calendar-page-fullheight">
            <Calendar onChange={handleDateChange} value={date} />
        </div>
    );
};

export default CalendarPage;
