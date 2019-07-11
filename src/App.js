import React, { Component } from 'react';
import Container from './Container';
// import fetchData from './apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservationData: []
    };
  }
  componentDidMount() {
   fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservationData => this.setState({ reservationData }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Container reservationData={this.state.reservationData}/>
          
        </div>
      </div>
    )
  }
}

export default App;
