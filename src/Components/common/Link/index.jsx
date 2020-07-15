import React from 'react';
import styles from './style.module.css'

import { Link as ReactRouterDomLink } from 'react-router-dom';

function Link({ children, to, className }) {
    className = className ? className : "";

    return (
        <ReactRouterDomLink to={to} className={` ${styles.a} ${className}`}>{children}</ReactRouterDomLink>
    )
};

export default Link;