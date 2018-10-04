import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './actions.css';
class AddClient extends Component {
    constructor() {
        super();
        this.state = {
            firstName:'',
            surname:'',
            countryName:'',
            ownerName:''
        }
    }
    updateFirstName = (e) => {
        this.setState({firstName: e.target.value})
      }
      updateSurname = (e) => {
        this.setState({surname: e.target.value})
      }
      updateCountryName = (e) => {
        this.setState({countryName: e.target.value})
      }
      updateOwnerName = (e) => {
        this.setState({ownerName: e.target.value})
      }
      createNewClient = () => {
        let newName = this.state.firstName, 
            newSurname = this.state.surname, 
            newCountry = this.state.countryName,
            newOwner = this.state.ownerName;
        if (newName || newSurname || newCountry||newOwner) 
        this.props.createNewClient(newName,newSurname,newCountry,newOwner);
        else alert ("Fill all data!");
        this.clearInputs();
        }
        clearInputs(){
            this.inputFirstName.value = "";
            this.inputSurname.value = "";
            this.inputCountryName.value = "";
            this.inputOwnerName.value = "";
        }
    render(){
        console.log("thisstate",this.state);
    return (
            <div>
            <h3>ADD CLIENT</h3>
            <div className="row action-box">
            <div className="col-md-2  ">
            First name:
             </div>
             <div className="col-md-1">
            <input type="text" onChange={this.updateFirstName} ref={el => this.inputFirstName = el}/>
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Surname name:
             </div>
             <div className="  col-md-1">
            <input type="text" onChange={this.updateSurname} ref={el => this.inputSurname = el}/>
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Country name:
             </div>
             <div className=" col-md-1">
            <input type="text" onChange={this.updateCountryName} ref={el => this.inputCountryName = el}/>
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Owner name:
             </div>
             <div className="  col-md-1">
            <input type="text" onChange={this.updateOwnerName} ref={el => this.inputOwnerName = el}/>
            </div>
            </div>
            <button type="button" onClick={this.createNewClient} className="btn add-n-c btn-outline-warning">Add new Client</button>
   </div>
    )
}}
export default AddClient;