import React, { Component } from 'react';
import './App.css';
import Contacts from './components/contacts';

class App extends Component {
  state = {
    contacts: []
  }
  
  componentDidMount(){
     fetch('http://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then((data) => {
       this.setState({ contact: data })
     })
     .catch(console.log)
  }

  render() {
    return(
      <Contacts contacts = {this.state.contact} />
    );
  }
}

export default App;
