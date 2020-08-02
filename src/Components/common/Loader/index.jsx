import React from 'react'

import styles from './style.module.css'

function Loader() {
    return (
        <div className={styles["lds-hourglass"]}></div>
    )
}

export default Loader