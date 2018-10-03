import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.css';
// import axios from 'axios';
import './App.css';
import myJson from './components/data.json';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import ClientInfo from './components/ClientInfo.js';
import Home from './components/Home.js';
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
    console.log(myJson)
    this.setState({ clients: myJson })
  }
  updateClientDetails =(id,name,surname,country) =>{
    console.log("AAAApppppp",id,' ',name,' ',surname, " ",country);
  }
  render() {
    console.log("Clients:", this.state.clients);
    return (
      <Router>
        <div className="App">
          {/* Routes go here */}
          <Route path="/" component={Home} />
          <Route path="/clients" exact render={({ match }) => <Clients match={match} getClientInfo={this.getClientInfo} clients={this.state.clients} updateClientDetails={this.updateClientDetails}/>} />
          {/* <Route path="/actions" exact render={() => <Actions movies={this.state.movies} changeRentStatus={this.changeRentStatus} budget={this.state.budget}/>} />
        <Route path="/analytics" exact render={({ match }) => <Analytics match= {match} movies={this.state.movies} />} />  */}
        </div>
      </Router>
    );
  }
}

export default App;
