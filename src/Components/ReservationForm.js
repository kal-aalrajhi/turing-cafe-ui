import React, { Component } from 'react';
import '../Styles/ReservationForm.css';

class ReservationForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            guestCount: ''
        }
    }

    makeReservation = (event) => {
        event.preventDefault();
        const reservation = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(reservation);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <form className='res-form'>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event)}
                />
                <input
                    type='text'
                    name='date'
                    placeholder='Date (mm/dd)'
                    value={this.state.date}
                    onChange={(event) => this.handleChange(event)}
                />
                <input
                    type='text'
                    name='time'
                    placeholder='Time'
                    value={this.state.time}
                    onChange={(event) => this.handleChange(event)}
                />
                <input
                    type='text'
                    name='guestCount'
                    placeholder='Number of guests'
                    value={this.state.guestCount}
                    onChange={(event) => this.handleChange(event)}
                />
                <button className='btn' onClick={(event) => {this.makeReservation(event)}}>Make Reservation</button>
            </form>
        )
    }
}

export default ReservationForm;