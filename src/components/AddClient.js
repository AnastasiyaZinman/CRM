import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './actions.css';
class AddClient extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render(){
    return (
            <div>
            <h3>ADD CLIENT</h3>
            <div className="row action-box">
            <div className="col-md-2  ">
            First name:
             </div>
             <div className="col-md-1">
            <input type="text" />
            </div>
             <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Surname name:
             </div>
             <div className="  col-md-1">
            <input type="text" />
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Country name:
             </div>
             <div className=" col-md-1">
            <input type="text" />
            </div>
            <div className="w-100 mt-2"></div>
             <div className="col-md-2  ">
            Owner name:
             </div>
             <div className="  col-md-1">
            <input type="text" />
            </div>
            </div>
            <button type="button" class="btn add-n-c btn-outline-warning">Add new Client</button>
   </div>
    )
}}
export default AddClient;