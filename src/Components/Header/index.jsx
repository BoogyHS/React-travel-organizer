import React from 'react';
import Link from '../common/Link'
import styles from './style.module.css'

function Header() {

    return (
        <header className={styles.header}>
            <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
            <label className={styles["menu-icon"]} htmlFor="menu-btn"><span className={styles.navicon}></span></label>
            <ul className={styles.menu}>
                <li><Link to="/">Начало</Link></li>
                <li><Link to="/register">Регистрация</Link></li>
                <li><Link to="/login">Вход</Link></li>
                <li><Link to="/logout">Изход</Link></li>
                <li><Link to="/new-travel">Ново пътуване</Link></li>
                <li><Link to="/statistics">Статистика</Link></li>
            </ul>
        </header>
    )
}

export default Header;
