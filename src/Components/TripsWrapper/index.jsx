import React, { useContext, useState, useEffect } from 'react'

import styles from './style.module.css'

//components
import Card from '../common/Card'

//context
import userContext from '../../Contexts/UserContext/index'

//services
import tripService from '../../Services/trip-service'


function TripsWrapper() {
    const [user,] = useContext(userContext);
    const [trips, setTrips] = useState(null);
    const currentDate = () => new Date().toJSON().split("T")[0];

    useEffect(() => {
        tripService.getTrips(user._id)
            .then(trips => {
                setTrips(trips);
            })
            .catch(err => console.log(err))
    }, [user._id]);

    return (
        <div>
            <h2 className={styles["responsive-width"]}>My Trips</h2>
            {trips
                ? <div className={styles.cards}>
                    {trips.map((trip) =>
                        <Card key={trip._id} trip={trip}></Card>)}
                    <div>{currentDate()}</div>
                </div>
                : <div>Loading...</div>
            }
        </div>
    )
}

export default TripsWrapper
