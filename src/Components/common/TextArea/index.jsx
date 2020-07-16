import React from 'react'

import styles from './style.module.css'

function TextArea({id, labelText}) {
    return (
        <div className={styles["textarea-wrapper"]}>
            <label htmlFor={id}>{labelText}</label>
            <textarea id={id}></textarea>
        </div>
    )
}

export default TextArea