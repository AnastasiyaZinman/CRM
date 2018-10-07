import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.css';
import axios from 'axios';
import './App.css';
// import myJson from './components/data.json';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Actions from './components/Actions.js';
import Menu from './components/Menu.js';
import Clients from './components/Clients.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clients: []
    }
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get('http://localhost:5000/getData')
    .then(result => {
      console.log(result.data);
      this.setState({ clients: result.data })
    })
  }
  updateClientDetails = (name, surname, country, id) => {
    const clientIndex = this.findClientIndex(id);
    let newState = [...this.state.clients];
    let clientItem = newState[clientIndex];
    clientItem = this.changeDataItem(clientItem, name, surname, country);
    newState[clientIndex] = clientItem;
    this.setState({ clients: newState });
    console.log("NEW LINE", this.state.clients[clientIndex])
  }
  findClientItemByName(name){
    alert(name);
   
    return this.state.clients.filter(clientData => {
      console.log("clientData",clientData);
      return clientData.name===name
    });

  }
  createNewClient = (name, surname, country, owner) => {
    console.log("FIND ROW",this.findClientItemByName(this.joinNameAndSername(name,surname)));
    // let newState = [...this.state.clients];
    // newState.add(clientItem, name, surname, country);

    console.log("Add to DB")
  }

  joinNameAndSername(name, surname) {
    return (name + ' ' + surname)
  }

  changeDataItem(clientItem, n, s, c) {
    if (n && s) {
      clientItem["name"] = this.joinNameAndSername(n, s);
      // alert(clientItem["name"])
    }
    else if (n || s) alert("Please, change fuul name. Name hasn't changed");
    if (c) {
      clientItem["country"] = c;
    }
    return clientItem;
  }
  findClientItem(id) {
    return this.state.clients.filter(
      client => client._id == id
    )[0]
  }
  findClientIndex(id) {
    var index;
    this.state.clients.forEach((f, i) => {
      if (f['_id'] === id) index = i;
    })
    return index;
  }
  render() {
    console.log("Clients:", this.state.clients);
    return (
      <Router>
        <div className="App">
          {/* Routes go here */}
          <Route path="/" component={Menu} />
          <Route path="/clients" exact render={({ match }) =>
            <Clients match={match} clients={this.state.clients} updateClientDetails={this.updateClientDetails} />} />
          <Route path="/actions" exact render={() => <Actions clients={this.state.clients} createNewClient={this.createNewClient} />} />
          {/* <Route path="/analytics" exact render={({ match }) => <Analytics match= {match} movies={this.state.movies} />} />   */}
        </div>
      </Router>
    );
  }
}

export default App;
