import React, { Component } from 'react';
import SwapiList from './components/SwapiList';
/*import SearchBox from '../components/SearchBox';*/
import './App.css';
/*import Scroll from '../components/Scroll';*/


class App extends Component {
  
  constructor() {
    super();
  
    this.state = {
      people: [],
    };
  }

  componentDidMount(){
    fetch('https://swapi.dev/api/people/?format=json')
    .then(response => {
      return response.json();
    })
    .then (swPeople => {
      this.setState({ people: swPeople.results })
    });
  }

  /*onSearchChange = (event) =>{
    this.setState({ searchField: event.target.value })
    
  }*/

  render(){
    var listPeople = this.state.people;
  return (
    <div className="tc">
      <h1>STAR WARS PEOPLE</h1>
      <SwapiList swPeople={ listPeople } />
      
    </div>
    );
  }
}


export default App;