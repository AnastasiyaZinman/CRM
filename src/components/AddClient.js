import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './actions.css';
class AddClient extends Component {
    constructor() {
        super();
        this.state = {
            firstName:'',
            sername:'',
            countryName:'',
            ownerName:''
        }
    }
    updateFirstName = (e) => {
        this.setState({firstName: e.target.value})
      }
      updateSurname = (e) => {
        this.setState({sername: e.target.value})
      }
      updateCountryName = (e) => {
        this.setState({countryName: e.target.value})
      }
      updateOwnerName = (e) => {
        this.setState({ownerName: e.target.value})
      }
    render(){
        console.log("stateAddClients",this.state);
    return (
            <div>
            <h3>ADD CLIENT</h3>
            <div className="row action-box">
            <div className="col-md-2  ">
            First name:
             </div>
             <div className="col-md-1">
            <input type="text" onChange={this.updateFirstName}/>
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Surname name:
             </div>
             <div className="  col-md-1">
            <input type="text" onChange={this.updateSurname}/>
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Country name:
             </div>
             <div className=" col-md-1">
            <input type="text" onChange={this.updateCountryName}/>
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Owner name:
             </div>
             <div className="  col-md-1">
            <input type="text" onChange={this.updateOwnerName}/>
            </div>
            </div>
            <button type="button" className="btn add-n-c btn-outline-warning">Add new Client</button>
   </div>
    )
}}
export default AddClient;