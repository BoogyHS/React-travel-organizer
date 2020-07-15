import React from 'react'

import styles from './style.module.css'

function FormButton({value, id}){
    return (
        <input type="submit" value={value} id={id} className={styles["form-button"]} />
    )
}

export default FormButton;