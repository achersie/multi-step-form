import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';

export class Form extends Component {

    state = {
        step: 1,
        values: {
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
        },
        userDetailsErrors: { firstName: '', lastName: '', email: '' },
        persDetailsErrors: { occupation: '', city: '', bio: '' },
        userDetailsValid: { firstNameValid: false, lastNameValid: false, emailValid: false },
        persDetailsValid: { occupationValid: false, cityValid: false, bioValid: false },
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
        let val = {...this.state.values}; 
        val[input] = e.target.value;
        const value = e.target.value;
        this.setState({ values: val},
                      () => {this.validateField(input, value)});
    }

    validateField(fieldName, value) {
        let UserDetailsValErrors = this.state.userDetailsErrors;
        let PersonalDetailsValErrors = this.state.persDetailsErrors;
        let { firstNameValid, lastNameValid, emailValid } = this.state.userDetailsValid;
        let { occupationValid, cityValid, bioValid } = this.state.persDetailsValid;

        switch(fieldName) {
            case 'firstName':
                firstNameValid = value.length > 1;
                UserDetailsValErrors.firstName = firstNameValid ? '' : ' is too short';
                break;
            case 'lastName':
                lastNameValid = value.length > 1;
                UserDetailsValErrors.lastName = lastNameValid ? '' : ' is too short';
                break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? true : false;
                UserDetailsValErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'occupation':
                occupationValid = value !== '' ? true : false;
                PersonalDetailsValErrors.occupation = occupationValid ? '' : ' please select your occupation';
                break;
            case 'city':
                cityValid = value !== '' ? true : false;
                PersonalDetailsValErrors.city = cityValid ? '' : ' please input your city';
                break;
            case 'bio':
                bioValid = value.length > 10;
                PersonalDetailsValErrors.bio = bioValid ? '' : ' must be atleast 10 characters';
                break;
            default:
              break;
        }

        const isUserDetailsvalid = { firstNameValid, lastNameValid, emailValid };
        const isPersonalDetailsvalid = { occupationValid, cityValid, bioValid };

        this.setState({ userDetailsErrors: UserDetailsValErrors,
                        persDetailsErrors: PersonalDetailsValErrors,
                        userDetailsValid: isUserDetailsvalid,
                        persDetailsValid: isPersonalDetailsvalid});
 
    }

    render() {
        const { step, userDetailsErrors, persDetailsErrors } = this.state;
        const { firstName, lastName, email, occupation, city, bio} = this.state.values;
        const values = { firstName, lastName, email, occupation, city, bio };
        const { firstNameValid, lastNameValid, emailValid } = this.state.userDetailsValid;
        const isUserDetailsValid = firstNameValid && lastNameValid && emailValid ;
        const { occupationValid, cityValid, bioValid } = this.state.persDetailsValid;
        const isPersonalDetailsValid = occupationValid && cityValid && bioValid ;

        switch(step) {
            case 1: 
                return (
                    <UserDetails 
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                        textErrors = {userDetailsErrors}
                        isValid = { isUserDetailsValid }
                    />
                );
            case 2: 
                return (
                    <PersonalDetails
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        handleChange = { this.handleChange }
                        values = { values } 
                        textErrors = {persDetailsErrors}
                        isValid = { isPersonalDetailsValid }
                    />
                );
            case 3: 
                return (
                    <Confirmation 
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        values = { this.state.values } 
                    />
                );
            case 4: 
                return (
                    <Success/>
                );
            default:
            break;
        }
    }
}

export default Form;
