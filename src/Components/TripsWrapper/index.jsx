import React, { useContext, useState, useEffect } from 'react'

import styles from './style.module.css'

//components
import Card from '../common/Card'
import Loader from '../common/Loader'
import Link from '../common/Link'

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
            <div className={styles.cards}>
                {trips
                    ? <div >
                        {trips.map((trip) =>
                            <Link to={`/my-trips/${trip._id}`} key={trip._id}>
                                <Card trip={trip}></Card>
                            </Link>)}
                        <div>{currentDate()}</div>
                    </div>
                    : <Loader></Loader>
                }
            </div>
        </div>
    )
}

export default TripsWrapper
