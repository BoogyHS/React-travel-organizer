import React, { useContext } from 'react'
import Link from '../Link'
import styles from './style.module.css'

import userContext from '../../../Contexts/UserContext/index'

function Header(props) {
    const { userDetails } = useContext(userContext);
    
    return (
        <header className={styles.header}>
            <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
            <label className={styles["menu-icon"]} htmlFor="menu-btn"><span className={styles.navicon}></span></label>
            <ul className={styles.menu}>
                <li><Link to="/">Начало</Link></li>
                {!userDetails.isLogged && <li><Link to="/register">Регистрация</Link></li>}
                {!userDetails.isLogged && <li><Link to="/login">Вход</Link></li>}
                {userDetails.isLogged && <li><Link to="/logout">Изход</Link></li>}
                {userDetails.isLogged && <li><Link to="/new-trip">Ново пътуване</Link></li>}
                {!userDetails.isLogged && <li><Link to="/new-trip">Ново пътуване</Link></li>}
                {userDetails.isLogged && <li><Link to="/statistics">Статистика</Link></li>}
            </ul>
        </header>
    )
}

export default Header;
