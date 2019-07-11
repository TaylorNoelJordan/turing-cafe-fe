import React, { Component } from 'react';
import Container from './Container';
import ResForm from './ResForm';
// import fetchData from './apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservationData: [],

    };
  }

  componentDidMount() {
   fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservationData => this.setState({ reservationData }))
    .catch(err => console.log(err))
  }

  addReservation = (newRes) => {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ ...newRes })
    }

    fetch('http://localhost:3001/api/v1/reservations', options)
    .then(response => response.json())
    .then(response => fetch(`http://localhost:3001/api/v1/reservations/${response.id}`))
    .then(response => response.json())
    .then(newRes => this.setState({ reservationData: [...this.state.reservationData, newRes] }))
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResForm addReservation={this.addReservation}/>
          <Container reservationData={this.state.reservationData}/>
          
        </div>
      </div>
    )
  }
}

export default App;
