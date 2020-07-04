import React from 'react';
import styles from './Navbar.module.css'

function Navigation() {

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/purpose">Цел</a></li>
                    <li><a href="/tasks">Задачи</a></li>
                    <li><a href="/resources">Средства</a></li>
                    <li><a href="/contacts">Контакти</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
