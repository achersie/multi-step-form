import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

export class Form extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        occupation: '',
        city: '',
        bio: '',
        formErrors: {email: '', password: ''},
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };
        
        switch(step) {
            case 1: 
                return (
                    <UserDetails 
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                );
            case 2: 
                return (
                    <PersonalDetails
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        handleChange = { this.handleChange }
                        values = { values } 
                    />
                );
            case 3: 
                return (
                    <Confirmation />
                );
            case 4: 
                return (
                    <Success />
                );
        }
        
    }
}

export default Form;
