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


function Reservations(props) {
    const [user,] = useContext(userContext);
    const [reservations, setReservations] = useState(null);
    const tripId = props.match.params.id;

    useEffect(() => {
        tripService.getReservations(user._id, tripId)
            .then(reservations => {
                console.log('reservations component' )
                // setReservations(reservations);
            })
            .catch(err => console.log(err))
    }, [user._id, tripId]);

    return (
        <div>
            <h2 className={styles["responsive-width"]}>Резервации</h2>
            <div className={styles.cards}>
                <Link to="/new-trip" className={styles.card}>
                    <div>
                        <h2>Ново пътуване</h2>
                    </div>
                </Link>
                {reservations
                    ? <div >
                        {reservations.map((reservation) =>
                            <Link to={`/my-trips/${reservation._id}`} key={reservation._id}>
                                <Card reservation={reservation}></Card>
                            </Link>)}
                        
                    </div>
                    : <Loader></Loader>
                }
            </div>
        </div>
    )
}

export default Reservations