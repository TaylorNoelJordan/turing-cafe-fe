import React from 'react';
import './ReservationCard.css'

const ReservationCard = ({ id, date, name, time, numGuests }) => {
    return (
        <article className='resi-card'>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <h3>{time}</h3>
            <h3>Number of Guests: {numGuests}</h3>
            <button className='cancel-btn'>Cancel</button>
        </article>
    )
}

export default ReservationCard