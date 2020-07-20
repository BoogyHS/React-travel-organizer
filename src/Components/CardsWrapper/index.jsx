import React from 'react'
import Card from '../common/Card'

import styles from './style.module.css'

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