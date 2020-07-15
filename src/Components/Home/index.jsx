import React from 'react';
import Link from '../common/Link'
import styles from './style.module.css'

function Home(){
    return (
        <div className={styles["home-card-wrapper"]}>
                <Link to="/new-travel" className={`${styles["home-card"]} ${styles["card"]}`}>
                    <div>
                        <h2>Ново пътуване</h2>
                    </div>
                </Link>
                <Link to="/my-travels" className={`${styles["home-card"]} ${styles["card"]}`}>
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
}

export default Home;