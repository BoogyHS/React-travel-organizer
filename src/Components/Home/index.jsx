import React from 'react';
import Link from '../common/Link'
import styles from './style.module.css'

// const loggedTextContentArr = ['Ново пътуване', 'Моите пътувания', 'Статистика'];

function Home(props) {

    if (props.loggedIn) {
        return (
            <div className={styles["home-card-wrapper"]}>
                <Link to="/new-trip" className={`${styles["home-card"]} ${styles["card"]}`}>
                    <div>
                        <h2>Ново пътуване</h2>
                    </div>
                </Link>
                <Link to="/my-trips" className={`${styles["home-card"]} ${styles["card"]}`}>
                    <div>
                        <h2>Моите пътувания</h2>
                    </div>
                </Link>
                <Link to="/statistics" className={`${styles["home-card"]} ${styles["card"]}`}>
                    <div>
                        <h2>Статистика</h2>
                    </div>
                </Link>
            </div>
        )
    } else {
        return (
            <div className={styles["home-card-wrapper"]}>
                <Link to="/register" className={`${styles["home-card"]} ${styles["card"]}`}>
                    <div>
                        <h2>Регистрация</h2>
                    </div>
                </Link>
                <Link to="/login" className={`${styles["home-card"]} ${styles["card"]}`}>
                    <div>
                        <h2>Вход</h2>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Home;