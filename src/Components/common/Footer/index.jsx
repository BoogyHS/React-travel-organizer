import React from 'react'

import styles from './style.module.css'

function Footer() {

    const currentYear = () => new Date().toJSON().split("T")[0].slice(0,4);

    return (
        <footer className={styles.footer}>
            <p>Copyright <span>{currentYear()}</span> BoogyHS</p>
        </footer>
    )
}

export default Footer