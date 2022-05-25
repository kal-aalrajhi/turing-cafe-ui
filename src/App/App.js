import React, { Component } from 'react';
import './App.css';
import fetchResponse from '../apiCalls';

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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
