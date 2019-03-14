import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Card from 'material-ui/Card'

class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
    
  render() {
    const { values } = this.props;

    return (
      <MuiThemeProvider>
        <AppBar title = 'Confirm Details' />
        <Card>
          <List disablePadding style ={ styles.list }>
            {
              Object.keys(values).map((keyName, i) => (
                <ListItem  key={i} style={ styles.item }>
                  <ListItemText primary={this.capitalize(keyName)} secondary={values[keyName]}/>
                </ListItem>
              ))
            }
          </List>  
          <RaisedButton
              label = 'Back'
              primary = { true }
              style = { styles.button }
              onClick = { this.back }
          />
          <RaisedButton
              label = 'Confirm'
              primary = { true }
              style = { styles.button }
              onClick = { this.continue }
          />
        </Card>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
      margin: 15,
      width: '150px'
  },
  list: {
      width: '40%', 
      margin: 'auto', 
      paddingTop: '20px',
  },
  item: {
    textAlign: 'center'
  }
}

export default Confirmation
