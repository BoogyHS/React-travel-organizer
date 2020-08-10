import React, { useContext, useEffect } from 'react'

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
    // const [reservations, setReservations] = useState(null);
    const tripId = props.match.params.id;

    const trips = [{
        trip: {
            created_at: "2020-08-03T12:20:43.967Z",
            endDate: "2020-08-05",
            name: "Bozhidar Atanasov",
            price: 0,
            startDate: "2020-08-04",
            updatedAt: "2020-08-03T12:20:43.967Z",
            userId: "5f27bb8db19e0c2fb02d924f",
            __v: 0,
            _id: "5f28011b539ba62aa4dd2a3cbe"
        }
    }]

    useEffect(() => {
        tripService.getReservations(user._id, tripId)
            .then(reservations => {
                console.log('reservations component')
                // setReservations(reservations);
            })
            .catch(err => console.log(err))
    }, [user._id, tripId]);

    return (
        <div>
            <h2 className={styles["responsive-width"]}>Резервации</h2>
            <div className={styles.cards}>
                <div className={styles["reservations-wrapper"]}>
                    <Link to="/add-hotel" className={styles.card}>
                        <div>
                            <h2>Добави Хотел</h2>
                        </div>
                    </Link>
                    <Link to="/add-flight" className={styles.card}>
                        <div>
                            <h2>Добави Полет</h2>
                        </div>
                    </Link>
                </div>

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

export default Reservations