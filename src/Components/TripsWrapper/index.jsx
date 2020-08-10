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

    useEffect(() => {
        tripService.getTrips(user._id)
            .then(trips => {
                console.log(trips)
                setTrips(trips);
            })
            .catch(err => console.log(err))
    }, [user._id]);

    return (
        <div>
            <h2 className={styles["responsive-width"]}>Моите Дестинации</h2>

            <div className={styles.cards}>
                <Link to="/new-trip" className={styles.card}>
                    <div>
                        <h2>Нова дестинация</h2>
                    </div>
                </Link>
                {trips
                    ? <div >
                        {trips.map((trip) =>
                            <Link to={`/my-trips/${trip._id}/reservations`} key={trip._id}>
                                <Card trip={trip}></Card>
                            </Link>)}
                    </div>
                    : <Loader></Loader>
                }
            </div>
        </div>
    )
}

export default TripsWrapper
