import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Card from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import { withStyles } from '@material-ui/core/styles'
import NativeSelect from '@material-ui/core/NativeSelect'

const jobs = [
    {
        value: '',
        label: ''
    },
    {
        value: 'Job 1',
        label: 'Job 1'
    },
    {
        value: 'Job 2',
        label: 'Job 2'
    },
    {
        value: 'Job 3',
        label: 'Job 3'
    },
];

class PersonalDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange, classes, isValid, textErrors } = this.props;

        return (
            <MuiThemeProvider>
                <AppBar title = 'Personal Details' />
                <Card className={classes.container}>
                    <FormControl style={{width: '20%'}} error = {textErrors.occupation.length ? true : false}>
                        <InputLabel>Occupation</InputLabel>
                        <NativeSelect
                            onChange = { handleChange('occupation') }
                            defaultValue = { values.occupation }>
                            {   
                                jobs.map( job => {
                                    return  <option key={ job.value } value = { job.value }>
                                                {job.label}
                                            </option>
                                })
                            }
                        </NativeSelect>
                        <FormHelperText>{textErrors.occupation}</FormHelperText>
                    </FormControl>
                    <br/>
                    <TextField
                        hintText = 'Enter Your City'
                        floatingLabelText = 'City'
                        onChange = { handleChange('city') }
                        defaultValue = { values.city }
                        error = {textErrors.city.length ? 'true' : 'false'}
                        errorText = { textErrors.city }
                    />
                    <br/>
                    <TextField
                        hintText = 'Enter Your Bio'
                        floatingLabelText = 'Bio'
                        onChange = { handleChange('bio') }
                        defaultValue = { values.bio }
                        error = {textErrors.bio.length ? 'true' : 'false'}
                        errorText = { textErrors.bio }
                    />
                    <br/>
                    <RaisedButton
                        label = 'Back'
                        primary = { true }                            
                        className = { classes.button }
                        onClick = { this.back }
                    />
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
    }
})

export default withStyles(styles)(PersonalDetails);
