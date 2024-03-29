//REFACTORING NEEDED

import React, { useContext, useEffect, useState } from 'react'

import styles from './style.module.css'

//components
import ReservationCard from '../common/ReservationCard'
import Loader from '../common/Loader'
import Link from '../common/Link'

//context
import userContext from '../../Contexts/UserContext/index'

//services
import tripService from '../../Services/trip-service'


function Reservations(props) {
    const [user,] = useContext(userContext);
    const [hotels, setHotels] = useState(null);
    const [flights, setFlights] = useState(null);
    const [tripName, setTripName] = useState(null);

    const tripId = props.match.params.id;

    useEffect(() => {
        tripService.getReservations(user._id, tripId)
            .then(reservations => {
                setTripName(reservations.name);
                setHotels(reservations.hotels);
                setFlights(reservations.flights);
                // console.log(reservations, 'reservations component')
                // setReservations(reservations);
            })
            .catch(err => console.log(err))
    }, [user._id, tripId]);

    return (
        <div>
            <h2 className={styles["responsive-width"]}>Destination: {tripName}</h2>
            <div className={styles.cards}>
                <div className={styles["reservations-wrapper"]}>
                    <Link to="/add-hotel" className={styles.card}>
                        <div>
                            <h2>Add hotel</h2>
                        </div>
                    </Link>
                    <Link to="/add-flight" className={styles.card}>
                        <div>
                            <h2>Add flight</h2>
                        </div>
                    </Link>
                </div>

                {hotels
                    ? <div >
                        {hotels.map((hotel) =>
                            <ReservationCard reservation={hotel} key={hotel._id} />
                        )}
                    </div>
                    : <Loader></Loader>
                }
                {flights
                    ? <div >
                        {flights.map((flight) =>
                            <ReservationCard reservation={flight} key={flight._id} />
                        )}
                    </div>
                    : <Loader />
                }
            </div>
        </div>
    )
}

export default Reservations