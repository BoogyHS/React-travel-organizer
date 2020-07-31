import React, { useContext } from 'react'

import styles from './style.module.css'

//components
import Link from '../Link'

//context
import userContext from '../../../Contexts/UserContext/index'

function Header(props) {
    const [user, ] = useContext(userContext);
    
    return (
        <header className={styles.header}>
            <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
            <label className={styles["menu-icon"]} htmlFor="menu-btn"><span className={styles.navicon}></span></label>
            <ul className={styles.menu}>
                <li><Link to="/">Начало</Link></li>
                {user.username && <li><Link to="/profile">{user.username}</Link></li>}
                {!user.username && <li><Link to="/register">Регистрация</Link></li>}
                {!user.username && <li><Link to="/login">Вход</Link></li>}
                {user.username && <li><Link to="/logout">Изход</Link></li>}
                {user.username && <li><Link to="/new-trip">Ново пътуване</Link></li>}
                {user.username && <li><Link to="/statistics">Статистика</Link></li>}
            </ul>
        </header>
    )
}

export default Header;