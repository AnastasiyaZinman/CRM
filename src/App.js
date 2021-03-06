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
import Analytics from './components/Analytics';


class App extends Component {
  constructor() {
    super();
    this.state = {
      clients: [],
      newId: 0
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
    this.updateClientDetailsDB(clientItem);
    console.log("NEW LINE", this.state.clients[clientIndex])
  }


  findClientItemByStrKey(strItem,key){
    alert(strItem);
    return this.state.clients.filter(clientData => {
      // console.log("clientData",clientData);
      return clientData[key]===strItem
    })[0];

  }
  createNewClient = (name, surname, country, owner) => {
    let clientName =this.joinNameAndSername(name,surname);
    console.log('login clicked', clientName," country", country,"ownerN",owner)
    let data = {
        name: clientName,
        countryName: country,
        ownerName:owner
    }
    axios.post('http://localhost:5000/addClient', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    )
    .then(response => {
      console.log("response from DB",response);
      this.addNewClientToState(response.data)
    })
    .catch(function (error) {
      alert("Sorry, something wrong. New client haven't added.");
      console.log(error);
    });
    console.log("Added to DB")
  }

  updateClientDetailsDB = (data) =>{
    console.log('DATA FOR DB', data);
    axios.post('http://localhost:5000/updateClientInfo', data, {
          headers: {
              'Content-Type': 'application/json',
          }
      }
      )
      .then(response => {
        console.log("response from DB",response);
        // this.addNewClientToState(response.data)
      })
      .catch(function (error) {
        alert("Sorry, something wrong. New client haven't added.");
        console.log(error);
      });
      console.log("Updated in DB")
  }

  addNewClientToState = (newClientData) => {
    console.log("new data from DB", newClientData);
     let newState= [...this.state.clients],
     newClient=newClientData;
    //  newClient= {
    //    "_id": id,
    //   "name": name,
    //   "email": "aaa@gmail.com",
    //   "firstContact": new Date() ,
    //   "emailType": '',
    //   "sold": false,
    //   "owner": owner,
    //   "country": country
    //  };
     newState.push(newClient);
     this.setState({clients: newState})
     console.log("new state client",this.state.clients[this.state.clients.length-1]);
  }
  joinNameAndSername(name, surname) {
    return (name + ' ' + surname)
  }

  changeDataItem(clientItem, n, s, c) {
    if (n && s) {
      clientItem["name"] = this.joinNameAndSername(n, s);
    }
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
   actionsChangesTSD = (clientName,key,newProperty) => {
    let client=this.findClientItemByStrKey(clientName,"name");
    let clientIndex =this.findClientIndex(client["_id"]);
    console.log("TRANSFER client",client," _id=",client["_id"],"index",clientIndex);
    let newState = [...this.state.clients];
    let clientItem = newState[clientIndex];
    (key!=="sold")?clientItem[key]= newProperty:clientItem[key]=true;
    newState[clientIndex] = clientItem;
    this.setState({ clients: newState });
    this.updateClientDetailsDB(clientItem);
  }

  declare = (clientName) => {
    let client=this.findClientItemByStrKey(clientName,"name");

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
          <Route path="/actions" exact render={() => 
          <Actions 
          clients={this.state.clients} 
          createNewClient={this.createNewClient} 
          actionsChangesTSD={this.actionsChangesTSD} 
          />} />
          <Route path="/analytics" exact render={({ match }) => <Analytics />} />  
        </div>
      </Router>
    );
  }
}

export default App;
