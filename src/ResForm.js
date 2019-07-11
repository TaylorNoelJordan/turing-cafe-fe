import React from 'react';
import './ResForm.css'

class ResForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            number: null,
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
        this.setState({name: '', date: '', time: '', number: null})
    }

    render() {
        return (
            <>
            <h2 className='res-label'>Need a reservation?</h2>
            <form className='resi-form'>
                <input type='text' placeholder='Enter your name' onChange={e => this.handleChange(e)}/>
                <input type='text' placeholder='Enter a date mm/dd' onChange={e => this.handleChange(e)}/>
                <input type='text' placeholder='Enter a time h:mm' onChange={e => this.handleChange(e)}/>
                <input type='text' placeholder='Enter how many guests in your party' onChange={e => this.handleChange(e)}/>
                <button className='submit-resi-btn' onClick={e => this.submitReservation(e)}>Find a Table!</button>
            </form>
            </>
        )
    }
}

export default ResForm;