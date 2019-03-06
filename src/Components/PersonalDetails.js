import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class PersonalDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title = 'Personal Details' />
                    <Card>
                        <TextField
                            hintText = 'Enter Your Occupation'
                            floatingLabelText = 'Occupation'
                            onChange = { handleChange('occupation') }
                            defaultValue = { values.occupation }
                        />
                        <br/>
                        <TextField
                            hintText = 'Enter Your City'
                            floatingLabelText = 'City'
                            onChange = { handleChange('city') }
                            defaultValue = { values.city }
                        />
                        <br/>
                        <TextField
                            hintText = 'Enter Your Bio'
                            floatingLabelText = 'Bio'
                            onChange = { handleChange('bio') }
                            defaultValue = { values.bio }
                        />
                        <br/>
                        <RaisedButton
                            label = 'Back'
                            primary = { true }
                            style = { styles.button }
                            onClick = { this.back }
                        />
                        <RaisedButton
                            label = 'Continue'
                            primary = { true }
                            style = { styles.button }
                            onClick = { this.continue }
                        />
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default PersonalDetails;
