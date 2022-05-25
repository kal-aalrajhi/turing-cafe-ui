import React from 'react';
import ReservationCard from './ReservationCard';
import '../Styles/ReservationContainer.css'

const ReservationContainer = ({ reservations }) => {
    const reservationCards = reservations.map(reservation => {
        return (
            <ReservationCard
                name={reservation.name}
                date={reservation.date}
                time={reservation.time}
                guestCount={reservation.number}
                id={reservation.id}
                key={reservation.id}
            />
        )
    })
    return (
        <></>
    );
}

export default ReservationContainer;