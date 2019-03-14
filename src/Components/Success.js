import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { RaisedButton } from 'material-ui'

class Success extends Component {

  reset = e => {
    e.preventDefault();
    window.location.reload();
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 style={ styles.message }>Your form submitted successfully!</h1>
          <RaisedButton
            label = 'Reset Form'
            primary = { true }
            style = { styles.button }
            onClick = { this.reset }
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
      margin: 15,
      width: '150px',
  },
  message: {
    fontWeight: 'bold', 
    margin: '0', 
    padding: '30px'
  }
}

export default Success
