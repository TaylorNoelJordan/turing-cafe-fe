import React from 'react';
import ReservationCard from './ReservationCard';
import './Container.css'

const Container = ({ reservationData }) => {
    const cards = reservationData.map(() => {
        return (
            <ReservationCard 
                key={reservationData.id}
                id={reservationData.id}
                name={reservationData.name}
                date={reservationData.date}
                time={reservationData.time}
                numGuests={reservationData.number}
            />
        )
    })
    return (
        <main className='reservation-display'>
            {cards}
        </main>
    )
}

export default Container;