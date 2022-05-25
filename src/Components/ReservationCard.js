import React from 'react';
import '../Styles/ReservationCard.css'

const ReservationCard = ({name, date, time, guestCount, id}) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <h3>{time}</h3>
            <p>{guestCount}</p>
        </div>
    );
}

export default ReservationCard;