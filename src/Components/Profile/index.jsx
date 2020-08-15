import React, { useContext } from 'react'

import styles from './style.module.css'

//context 
import userContext from '../../Contexts/UserContext'

function Profile() {
    const [user, setUser] = useContext(userContext);
    console.log(user)

    return (
        <div className={styles.profile}>{JSON.stringify(user)}</div>
    )
}

export default Profile