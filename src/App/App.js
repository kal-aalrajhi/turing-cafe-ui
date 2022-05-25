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

  addReservation = (reservation) => {
    this.setState({ reservations: [...this.state.reservations, reservation] });
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm />
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
