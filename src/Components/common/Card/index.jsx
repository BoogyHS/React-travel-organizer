import React from 'react'

import styles from './style.module.css'

function Card(props) {
    console.log(props.trip)
    return (
        <div className={styles.card}>
            <div className={styles["card-left-part"]}>
                <img src="https://bstatic.com/xdata/images/hotel/312x172/181262908.jpg?k=5cecfa4b7abff4abf8576cdf5c127aaec15294dd223b693ed052fccfe0557dd2&o="
                    alt="" />
            </div>
            <div className={styles["card-middle-part"]}>
                <h3> <span>{props.trip.name}</span> <span></span></h3>
                <h4 className={styles["card-hotel-name"]}> </h4>
                <p> <b>Start</b> <span>{props.trip.startDate}</span> <b>End</b> <span>{props.trip.endDate}</span></p>
            </div>
            <div className={styles["card-right-part"]}>
                <p>Price: <span>{props.trip.price}</span> &euro;</p>
            </div>
        </div>
    )
}

export default Card