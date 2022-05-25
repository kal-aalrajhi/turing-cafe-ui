import React from 'react';
import '../Styles/ReservationCard.css'

const ReservationCard = ({name, date, time, guestCount, id}) => {
    return (
        <div className='card'>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <h3>{time}</h3>
            <p>{`Number of guests: ${guestCount}`}</p>
            <button className='btn'>Cancel</button>
        </div>
    );
}

export default ReservationCard;