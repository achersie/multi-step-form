import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Card from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { withStyles } from '@material-ui/core/styles'

export class UserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { textErrors, values, handleChange, isValid, classes } = this.props;
        
        return (
            <MuiThemeProvider>
                <AppBar title = 'User Details' />
                <Card className = {classes.container}>
                    <TextField
                        hintText = 'Enter Your First Name'
                        floatingLabelText = 'First Name'
                        onChange = { handleChange('firstName') }
                        defaultValue = { values.firstName }
                        error = {textErrors.firstName.length ? 'true' : 'false'}
                        errorText = { textErrors.firstName }
                    />
                    <br/>
                    <TextField
                        hintText = 'Enter Your Last Name'
                        floatingLabelText = 'Last Name'
                        onChange = { handleChange('lastName') }
                        defaultValue = { values.lastName }
                        error = {textErrors.lastName.length ? 'true' : 'false'}
                        errorText = { textErrors.lastName }
                    />
                    <br/>
                    <TextField
                        hintText = 'Enter Your Email'
                        floatingLabelText = 'Email'
                        onChange = { handleChange('email') }
                        defaultValue = { values.email }
                        error = {textErrors.email.length ? 'true' : 'false'}
                        errorText = { textErrors.email }
                    />
                    <br/>
                        <RaisedButton
                        label = 'Continue'
                        primary = { true }
                        disabled = { !isValid }
                        className = { classes.button }
                        onClick = { this.continue }
                    />
                </Card>
            </MuiThemeProvider>
        )
    }
}

const styles = theme => ({
    container: {
        padding: 20
      },
    button: {
        margin: 15,
        width: '150px'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
})

export default withStyles(styles)(UserDetails)
