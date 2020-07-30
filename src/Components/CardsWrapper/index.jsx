import React from 'react'

import styles from './style.module.css'

//components
import Card from '../common/Card'

//services
// import tripService from '../../Services/trip-service'

function CardsWrapper(){

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