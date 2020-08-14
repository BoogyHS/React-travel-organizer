import React from 'react'

import styles from './style.module.css'

function FlightInfo({ props }) {
    const { departure, destination } = props.reservation;
    const date = props.reservation["date-time"].split("T")[0];
    const time = props.reservation["date-time"].split("T")[1];

    console.log(props)
    return (
        <div className={styles["card-middle-part"]}>
            <h3>Departure: <span>{departure}</span> - Destination: <span>{destination}</span></h3>
            {<h4 className={styles["card-hotel-name"]}> </h4>}
            <p>Date:<b>{date}</b> at <b>{time}</b> local time</p>
        </div>
    )
}

export default FlightInfo