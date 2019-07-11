import React from 'react';
import ReservationCard from './ReservationCard';
import './Container.css'

const Container = ({ reservationData }) => {
    console.log('data', reservationData)
    const cards = reservationData.map(card => {
        return (
            <ReservationCard 
                key={card.id}
                id={card.id}
                name={card.name}
                date={card.date}
                time={card.time}
                numGuests={card.number}
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