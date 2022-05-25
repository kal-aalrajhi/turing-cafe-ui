import React, { Component } from 'react';
import ReservationForm from './ReservationForm';
import '../Styles/ReservationForm.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            guestCount: 0
        }
    }
    render() {
        return (
            <form className='res-form'>
                
            </form>
        )
    }
}

export default ReservationForm;