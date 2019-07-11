import React from 'react';
import './ResForm.css'
import PropTypes from 'prop-types';

class ResForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitReservation = (e) => {
        e.preventDefault();

        const newRes = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReservation(newRes);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({name: '', date: '', time: '', number: ''})
    }

    render() {
        return (
            <>
            <h2 className='res-label'>Need a reservation?</h2>
            <form className='resi-form'>
                <input type='text' placeholder='Enter your name' name='name' value={this.state.name} onChange={e => this.handleChange(e)}/>
                <input type='text' placeholder='Enter a date mm/dd' name='date' value={this.state.date} onChange={e => this.handleChange(e)}/>
                <input type='text' placeholder='Enter a time h:mm' name='time' value={this.state.time} onChange={e => this.handleChange(e)}/>
                <input type='number' placeholder='Enter how many guests in your party' value={this.state.number} name='number' onChange={e => this.handleChange(e)}/>
                <button className='submit-resi-btn' onClick={e => this.submitReservation(e)}>Find a Table!</button>
            </form>
            </>
        )
    }
}

ResForm.propTypes = {
    addReservation: PropTypes.func.isRequired
}

export default ResForm;