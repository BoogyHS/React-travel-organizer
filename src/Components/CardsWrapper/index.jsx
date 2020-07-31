import React, { useContext } from 'react'

import styles from './style.module.css'

//components
import Card from '../common/Card'

//context
import userContext from '../../Contexts/UserContext/index'

//services
import tripService from '../../Services/trip-service'


function CardsWrapper() {

    const [user, setUser] = useContext(userContext);

    tripService.getTrips(user._id)
        .then(trips => {
            console.log(trips)
        })
        .catch(err => console.log(err))

    return (
        <div className={styles.cards}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    )
}

export default CardsWrapper