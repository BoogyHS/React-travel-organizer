import React, { useContext } from 'react'

import styles from './style.module.css'
import userImg from '../../images/User_Circle.png'

//context 
import userContext from '../../Contexts/UserContext'

function Profile() {
    const [user,] = useContext(userContext);
    const userTripsNames = user.trips
        .reduce((acc, curr) => { return acc.concat(curr.name); }, [])
        .join(' ');

    return (
        <div className={styles.profile}>
            <img src={userImg} alt="default user" />
            <h3>User Info:</h3>
            <div className={styles.flex}>
                <p>Name: </p>
                <p><b>{user.name}</b></p>
            </div>
            <div className={styles.flex}>
                <p>Email: </p>
                <p><b>{user.email}</b></p>
            </div>
            <div className={styles.flex}>
                <p>Username: </p>
                <p><b>{user.username}</b></p>
            </div>
            <div className={styles.flex}>
                <p>Trips: </p>
                <p><b>{userTripsNames}</b></p>
            </div>
        </div>
    )
}

export default Profile