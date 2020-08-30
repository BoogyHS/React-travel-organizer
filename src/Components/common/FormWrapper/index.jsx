import React from 'react'

import styles from './style.module.css'

function FormWrapper({ children }) {
    return (
        <div className={styles["wrapper-form"]}>
            {children}
        </div>
    )
}

export default FormWrapper