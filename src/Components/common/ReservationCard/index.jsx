import React from 'react'

import styles from './style.module.css'

import hotelImg from '../../../images/hotel.png'
import planeImg from '../../../images/plane.png'

function Card(props) {

    const { type } = props.reservation;
    const img = type === 'hotel' ? hotelImg : planeImg;
    
    return (
        <div className={`${styles.card} ${styles["reservations-cards"]}`}>
            <div className={styles["card-left-part"]}>
                <img src={img}
                    alt="" />
            </div>
            <div className={styles["card-middle-part"]}>
                <h3> <span>{props.reservation.name}</span> {!props.reservation && <span></span>}</h3>
                {!props.reservation && <h4 className={styles["card-hotel-name"]}> </h4>}
                <p> <b>Start</b> <span>{props.reservation["check-in"]}</span> <b>End</b> <span>{props.reservation["check-out"]}</span></p>
            </div>
            <div className={styles["card-right-part"]}>
                <p>Price: <span>{props.reservation.price}</span> &euro;</p>
            </div>
        </div>
    )
}

export default Card