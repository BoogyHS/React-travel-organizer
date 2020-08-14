import React from 'react'

import styles from './style.module.css'

import hotelImg from '../../../images/hotel.png'
import planeImg from '../../../images/plane.png'

//components
import HotelInfo from '../HotelInfo';
import FlightInfo from '../FlightInfo';

function Card(props) {

    const { type } = props.reservation;
    const img = type === 'hotel' ? hotelImg : planeImg;

    return (
        <div className={`${styles.card} ${styles["reservations-cards"]}`}>
            <div className={styles["card-left-part"]}>
                <img src={img}
                    alt="" />
            </div>
            {type === 'hotel'
                ? <HotelInfo props={{...props}}></HotelInfo>
                : <FlightInfo props={{...props}}></FlightInfo>
            }
            <div className={styles["card-right-part"]}>
                <p>Price: <span>{props.reservation.price}</span> &euro;</p>
            </div>
        </div>
    )
}

export default Card