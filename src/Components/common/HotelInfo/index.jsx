import React from 'react'

import styles from './style.module.css'

function HotelInfo({props}) {

    const name = props.reservation["hotel-name"];
    const checkIn = props.reservation["check-in"];
    const checkOut = props.reservation["check-out"];
    const { city, country } = props.reservation;

    return (
        <div className={styles["card-middle-part"]}>
            <h3> <span>{name}</span> в <span>{city}</span> - {country}</h3>
            {<h4 className={styles["card-hotel-name"]}> </h4>}
            <p> Настаняване: <b>{checkIn}</b> Заминаване: <b>{checkOut}</b></p>
        </div>
    )
}

export default HotelInfo