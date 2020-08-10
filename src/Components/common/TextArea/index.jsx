import React from 'react'

import styles from './style.module.css'

function TextArea({id, labelText, register}) {
    return (
        <div className={styles["textarea-wrapper"]}>
            <label htmlFor={id}>{labelText}</label>
            <textarea 
            id={id}
            name={id} 
            ref={register}
            ></textarea>
        </div>
    )
}

export default TextArea