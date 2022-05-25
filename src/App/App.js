import React, { Component } from 'react';
import './App.css';
import fetchResponse from '../apiCalls';
import ReservationContainer from '../Components/ReservationContainer';
import ReservationForm from '../Components/ReservationForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetchResponse('http://localhost:3001/api/v1/reservations')
    .then(reservationData => {this.setState({ reservations: reservationData })})
    .catch(err => {
      console.log(err);              
      this.setState({error: `${err}. Seems like we couldn't load the data right now, try again later!`});
    });
  }

  postData = (reservation) => {
    // { name, data, time, number } = reservation;
    fetch('http://localhost:3001/api/v1/reservations', {
	  method: "POST",                       
	  headers: {                            
		'Content-type': 'application/json'  
	  },
	  body: JSON.stringify(                   
      {
        name: reservation.name,
        date: reservation.date, 
        time: reservation.time, 
        number: Number(reservation.number)
      }
	  )
  })
  .then(response => {
    if (!response.ok) {
        console.log('HTTP POST request unsuccessful');
        throw new Error(`status ${response.status} at URL: ${response.url}`);
    } else {
        console.log('HTTP POST request successful');
    }
    return response;
  })
  .then(response => response.json());
}

  addReservation = (reservation) => {
    this.postData(reservation)
    this.setState({ reservations: [...this.state.reservations, reservation] });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          {!this.state.reservations.length ? <h2>No Reservations Made, Try Making One!</h2> : null}
          <ReservationContainer reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
