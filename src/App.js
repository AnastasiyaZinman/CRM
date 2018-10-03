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
  //console.log("AAAApppppp",id,' ',name,' ',surname, " ",country);
  // const clientItem = this.findClientItem(id);
  const clientIndex = this.findClientIndex(id);
  // console.log("clientItem",clientItem);
  // console.log("clientIndex",clientIndex);
  let newState=[...this.state.clients];
  let clientItem = newState[clientIndex];
  clientItem = this.changeDataItem(clientItem,name,surname,country);
  newState[clientIndex]=clientItem;
  this.setState({clients: newState});
  console.log("NEW LINE",this.state.clients[clientIndex])

  }
  changeDataItem(clientItem, n, s, c){
  clientItem["name"] = n + ' ' + s;
  clientItem["country"] = c;
  return clientItem;
  }
  findClientItem(id){
   return this.state.clients.filter(
      client => client._id==id
    )[0]
  }
  findClientIndex(id){
    var index;
    this.state.clients.forEach((f,i)=> { 
         if (f['_id'] === id) index=i;
      })
    return index;
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
