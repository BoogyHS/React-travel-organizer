//REFACTORING NEEDED

import React from 'react'

import styles from './style.module.css'

//images
import hotelImg from '../../../images/hotel.png'
import planeImg from '../../../images/plane.png'

//Services
import flightService from '../../../Services/flight-service'
import hotelService from '../../../Services/hotel-service'

//components
import HotelInfo from '../HotelInfo';
import FlightInfo from '../FlightInfo';

function Card(props) {

    const { type } = props.reservation;
    const imgType = {
        hotel: hotelImg,
        flight: planeImg
    }
    const img = imgType[type];

    const serviceType = {
        hotel: (handlerType, id) => {
            hotelService[handlerType](id);
        },
        flight: (handlerType, id) => {
            flightService[handlerType](id);
        },
    }

    function editHandler(id, type) {
        serviceType[type]('edit', id);
    }

    function deleteHandler(id, type) {
        serviceType[type]('del', id);
    }

    return (
        <div className={`${styles.card} ${styles["reservations-cards"]}`}>
            <div className={styles["card-left-part"]}>
                <img src={img}
                    alt="" />
            </div>
            {type === 'hotel'
                ? <HotelInfo props={{ ...props }}></HotelInfo>
                : <FlightInfo props={{ ...props }}></FlightInfo>
            }
            <div className={styles["card-right-part"]}>
                <div className={styles["icon-wrapper"]}>
                    <i className="far fa-edit" onClick={() => editHandler(props.reservation._id, props.reservation.type)}></i>
                    <i className="far fa-trash-alt" onClick={() => deleteHandler(props.reservation._id, props.reservation.type)}></i>
                </div>
                <p>Цена: <span>{props.reservation.price}</span> &euro;</p>
            </div>
        </div>
    )
}

export default Card