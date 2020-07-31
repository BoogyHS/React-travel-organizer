import React, { useContext } from 'react';

import styles from './style.module.css'

// components
import Link from '../common/Link'

//context
import userContext from '../../Contexts/UserContext'

function Home(props) {

    const [user, setUser] = useContext(userContext);
    
    if (user.username) {
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