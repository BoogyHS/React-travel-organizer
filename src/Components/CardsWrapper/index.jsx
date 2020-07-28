import React from 'react'

import styles from './style.module.css'

import Card from '../common/Card'

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