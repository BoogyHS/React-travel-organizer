import React from 'react'

import styles from './style.module.css'

function FormButton({text, id}){
    return (
        <input type="submit" value={text} id={id} className={styles["form-button"]} />
    )
}

export default FormButton;