// Placeholder to host a component
import React from "react";

const Hours = () => {
//get the current day of the week
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getDay();

    let openingHours;

    if (currentDayOfWeek >= 1 && currentDayOfWeek <= 5) {
        openingHours = "10am - 4pm";
    } else {
        openingHours = "9am - 8pm";
    }

    return (
        <div>
            <h2>Today's Opening Hours</h2>
            <p>{currentDate.toLocaleDateString("en-US", { weekday: "long" })}</p>
            <p>{openingHours}</p>
        </div>
    );
};

// The Hours component displays the hours of operation for the store
// opening hours are from 10am to 4pm on weekdays and 9 am to 8 pm on weekends
export default Hours;



