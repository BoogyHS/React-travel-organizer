import React, { useContext } from 'react'

import styles from './style.module.css'

//components
import Link from '../Link'

//context
import userContext from '../../../Contexts/UserContext/index'

function Header(props) {
    const [user,] = useContext(userContext);

    return (
        <header className={styles.header}>
            <input className={styles["menu-btn"]} type="checkbox" id="menu-btn" />
            <label className={styles["menu-icon"]} htmlFor="menu-btn"><span className={styles.navicon}></span></label>
            <ul className={styles.menu}>
                <li><Link to="/">Home</Link></li>
                {user && <li><Link to="/profile">{user.username}</Link></li>}
                {!user && <li><Link to="/register">Register</Link></li>}
                {!user && <li><Link to="/login">Login</Link></li>}
                {user && <li><Link to="/my-trips">My destinations</Link></li>}
                {user && <li><Link to="/logout">Logout</Link></li>}
                {/*{user && <li><Link to="/statistics">Статистика</Link></li>}*/}
            </ul>
        </header>
    )
}

export default Header;