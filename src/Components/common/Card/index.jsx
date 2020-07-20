import React from 'react'
import Link from '../Link'

import styles from './style.module.css'

function Card(props) {
    return (
        <Link to={'#'}>
            <div className={styles.card}>
                <div className={styles["card-left-part"]}>
                    <img src="https://bstatic.com/xdata/images/hotel/312x172/181262908.jpg?k=5cecfa4b7abff4abf8576cdf5c127aaec15294dd223b693ed052fccfe0557dd2&o="
                        alt="" />
                </div>
                <div className={styles["card-middle-part"]}>
                    <h3> <span>City</span>, <span>Country</span></h3>
                    <h4 className={styles["card-hotel-name"]}>Ibis hotel</h4>
                    <p><span>13 sep 2020</span> - <span>15 sep 2020</span></p>
                </div>
                <div className={styles["card-right-part"]}>
                    <p><span>Price</span> EUR</p>
                </div>
            </div>
        </Link>
    )
}

export default Card